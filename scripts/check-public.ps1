$ErrorActionPreference='Stop'

function Check-PathRef([string]$baseFile,[string]$ref,[System.Collections.Generic.HashSet[string]]$missing){
  if ([string]::IsNullOrWhiteSpace($ref)) { return }
  $r = $ref.Trim()
  if ($r.StartsWith('http://') -or $r.StartsWith('https://') -or $r.StartsWith('mailto:') -or $r.StartsWith('tel:') -or $r.StartsWith('#') -or $r.StartsWith('data:') -or ($r.StartsWith('javascript:') -or $r.StartsWith('/universe/') -or $r.Contains('${'))) { return }
  $r = $r.Split('?')[0].Split('#')[0]
  if ([string]::IsNullOrWhiteSpace($r)) { return }

  $baseDir = Split-Path -Parent $baseFile
  if ($baseFile -like "*\\public\\js\\*" -or $baseFile -like "*\public\js\*") {
    $baseDir = (Resolve-Path 'public').Path
  }
  try {
    $target = [System.IO.Path]::GetFullPath((Join-Path $baseDir $r))
    if (-not (Test-Path -LiteralPath $target)) {
      [void]$missing.Add("$baseFile => $ref")
    }
  } catch {
    # Ignore malformed non-path values picked by regex.
  }
}

$files = @()
$files += Get-ChildItem -Path 'public\*.html' -File
$files += Get-ChildItem -Path 'public\css\*.css' -File
$files += Get-ChildItem -Path 'public\js\*.js' -File

$missing = New-Object 'System.Collections.Generic.HashSet[string]'

foreach($f in $files){
  $raw = Get-Content -LiteralPath $f.FullName -Raw

  foreach($m in [regex]::Matches($raw, '(?:src|href)\s*=\s*"([^"]+)"')) { Check-PathRef $f.FullName $m.Groups[1].Value $missing }
  foreach($m in [regex]::Matches($raw, '(?:src|href)\s*=\s*''([^'']+)''')) { Check-PathRef $f.FullName $m.Groups[1].Value $missing }

  foreach($m in [regex]::Matches($raw, 'url\(([^\)]+)\)')) {
    $v = $m.Groups[1].Value.Trim().Trim('"').Trim("'")
    Check-PathRef $f.FullName $v $missing
  }

  foreach($m in [regex]::Matches($raw, '"([^\"]+\.(?:png|jpg|jpeg|svg|webp|gif|mp4|webm|mov|m4v))"')) { Check-PathRef $f.FullName $m.Groups[1].Value $missing }
  foreach($m in [regex]::Matches($raw, '''([^'']+\.(?:png|jpg|jpeg|svg|webp|gif|mp4|webm|mov|m4v))''')) { Check-PathRef $f.FullName $m.Groups[1].Value $missing }
}

Write-Output "CHECKED_FILES=$($files.Count)"
Write-Output "MISSING_COUNT=$($missing.Count)"
if ($missing.Count -gt 0) {
  $missing | Select-Object -First 50
  exit 2
}
