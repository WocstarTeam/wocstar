param(
  [string]$SourceRoot = ".",
  [string]$OutDir = "public"
)

$ErrorActionPreference = "Stop"

function Ensure-Dir([string]$p) {
  if (-not (Test-Path -LiteralPath $p)) {
    New-Item -ItemType Directory -Path $p | Out-Null
  }
}

$src = (Resolve-Path $SourceRoot).Path
$out = Join-Path $src $OutDir

if (Test-Path -LiteralPath $out) {
  Remove-Item -LiteralPath $out -Recurse -Force
}
Ensure-Dir $out

# Copy app code
foreach ($folder in @("css", "js")) {
  Copy-Item -LiteralPath (Join-Path $src $folder) -Destination (Join-Path $out $folder) -Recurse -Force
}

# Copy html + top-level css
foreach ($f in @("index.html", "portfolio.html", "tokens.css")) {
  if (Test-Path -LiteralPath (Join-Path $src $f)) {
    Copy-Item -LiteralPath (Join-Path $src $f) -Destination (Join-Path $out $f) -Force
  }
}

# Asset hierarchy
$imgRoot = Join-Path $out "assets/images"
$vidRoot = Join-Path $out "assets/videos"
Ensure-Dir $imgRoot
Ensure-Dir $vidRoot

$dirMap = @{
  "academy"       = "academy"
  "advisory board"= "advisory-board"
  "allies"        = "allies"
  "exits"         = "exits"
  "fellows"       = "fellows"
  "portco logo"   = "portco"
  "Wocstar logos" = "wocstar-logos"
}

foreach ($k in $dirMap.Keys) {
  $from = Join-Path $src $k
  if (Test-Path -LiteralPath $from) {
    $to = Join-Path $imgRoot $dirMap[$k]
    Ensure-Dir $to
    Copy-Item -Path (Join-Path $from "*") -Destination $to -Recurse -Force
  }
}

# Top-level media files
$imageExt = @(".png", ".jpg", ".jpeg", ".svg", ".webp", ".gif")
$videoExt = @(".mp4", ".webm", ".mov", ".m4v")

$topFiles = Get-ChildItem -LiteralPath $src -File
$topImageNames = @()
$topVideoNames = @()

foreach ($f in $topFiles) {
  $ext = $f.Extension.ToLowerInvariant()
  if ($imageExt -contains $ext) {
    Ensure-Dir (Join-Path $imgRoot "misc")
    $miscDir = Join-Path $imgRoot "misc"
    Copy-Item -LiteralPath $f.FullName -Destination (Join-Path $miscDir $f.Name) -Force
    $topImageNames += $f.Name
  } elseif ($videoExt -contains $ext) {
    Copy-Item -LiteralPath $f.FullName -Destination (Join-Path $vidRoot $f.Name) -Force
    $topVideoNames += $f.Name
  }
}

# Cloudflare production files
@"
# Security headers
/*
  X-Content-Type-Options: nosniff
  X-Frame-Options: SAMEORIGIN
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()
  Cross-Origin-Opener-Policy: same-origin

# Aggressive caching for static assets
/assets/*
  Cache-Control: public, max-age=31536000, immutable

# HTML should revalidate quickly
/*.html
  Cache-Control: public, max-age=0, must-revalidate
"@ | Set-Content -Path (Join-Path $out "_headers") -Encoding UTF8

@"
# Keep explicit pages accessible
/portfolio   /portfolio.html   200
"@ | Set-Content -Path (Join-Path $out "_redirects") -Encoding UTF8

@"
name = "wocstar-demo"
compatibility_date = "2026-04-14"
pages_build_output_dir = "public"
"@ | Set-Content -Path (Join-Path $src "wrangler.toml") -Encoding UTF8

# Path rewrites for copied files only
$filesToRewrite = @()
$filesToRewrite += Get-ChildItem -Path (Join-Path $out "*.html") -File
$filesToRewrite += Get-ChildItem -Path (Join-Path $out "css\*.css") -File
$filesToRewrite += Get-ChildItem -Path (Join-Path $out "js\*.js") -File
$tok = Get-Item -Path (Join-Path $out "tokens.css") -ErrorAction SilentlyContinue
if ($tok) { $filesToRewrite += $tok }
$filesToRewrite = $filesToRewrite | Where-Object { $_ -ne $null }

$prefixReplacements = @(
  @{ old = "Wocstar logos/"; new = "assets/images/wocstar-logos/" },
  @{ old = "portco logo/";  new = "assets/images/portco/" },
  @{ old = "advisory board/"; new = "assets/images/advisory-board/" },
  @{ old = "academy/"; new = "assets/images/academy/" },
  @{ old = "allies/"; new = "assets/images/allies/" },
  @{ old = "exits/"; new = "assets/images/exits/" },
  @{ old = "fellows/"; new = "assets/images/fellows/" },
  @{ old = "../Wocstar logos/"; new = "../assets/images/wocstar-logos/" },
  @{ old = "../portco logo/";  new = "../assets/images/portco/" },
  @{ old = "../advisory board/"; new = "../assets/images/advisory-board/" },
  @{ old = "../academy/"; new = "../assets/images/academy/" },
  @{ old = "../allies/"; new = "../assets/images/allies/" },
  @{ old = "../exits/"; new = "../assets/images/exits/" },
  @{ old = "../fellows/"; new = "../assets/images/fellows/" }
)

foreach ($file in $filesToRewrite) {
  $content = Get-Content -LiteralPath $file.FullName -Raw

  foreach ($r in $prefixReplacements) {
    $content = $content.Replace($r.old, $r.new)
  }

  foreach ($name in $topImageNames) {
    $content = $content.Replace("../$name", "../assets/images/misc/$name")
    $content = $content.Replace("'$name'", "'assets/images/misc/$name'")
    $content = $content.Replace('"' + $name + '"', '"assets/images/misc/' + $name + '"')
    $content = $content.Replace("($name)", "(assets/images/misc/$name)")
  }

  foreach ($name in $topVideoNames) {
    $content = $content.Replace("../$name", "../assets/videos/$name")
    $content = $content.Replace("'$name'", "'assets/videos/$name'")
    $content = $content.Replace('"' + $name + '"', '"assets/videos/' + $name + '"')
    $content = $content.Replace("($name)", "(assets/videos/$name)")
  }

  Set-Content -LiteralPath $file.FullName -Value $content -Encoding UTF8
}

Write-Output "PREP_OK:$out"
Write-Output "TOP_IMAGES:$($topImageNames.Count)"
Write-Output "TOP_VIDEOS:$($topVideoNames.Count)"
