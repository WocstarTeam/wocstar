function json(data, init = {}) {
  return new Response(JSON.stringify(data), {
    ...init,
    headers: {
      'content-type': 'application/json; charset=UTF-8',
      'cache-control': 'no-store',
      ...(init.headers || {})
    }
  });
}

function sanitize(value) {
  return String(value || '').replace(/\r/g, '').trim();
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      Allow: 'POST, OPTIONS'
    }
  });
}

export async function onRequestPost(context) {
  try {
    const contentType = context.request.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) {
      return json({ ok: false, error: 'Invalid content type' }, { status: 415 });
    }

    const payload = await context.request.json();
    const name = sanitize(payload.name);
    const companyName = sanitize(payload.company_name);
    const email = sanitize(payload.email);
    const role = sanitize(payload.role);
    const phone = sanitize(payload.phone);
    const message = sanitize(payload.message);

    if (!name || !companyName || !email || !role || !phone) {
      return json({ ok: false, error: 'Missing required fields' }, { status: 400 });
    }

    const ip =
      context.request.headers.get('CF-Connecting-IP') ||
      context.request.headers.get('x-forwarded-for') ||
      'Unknown';
    const userAgent = context.request.headers.get('user-agent') || 'Unknown';
    const referer = context.request.headers.get('referer') || 'Unknown';
    const receivedAt = new Date().toISOString();

    const mailChannelsPayload = {
      personalizations: [
        {
          to: [{ email: 'colleen@wocstar.com', name: 'Wocstar Academy' }]
        }
      ],
      from: {
        email: 'no-reply@wocstar.com',
        name: 'Wocstar Website'
      },
      reply_to: {
        email
      },
      subject: `Wocstar Academy Waitlist: ${name}`,
      content: [
        {
          type: 'text/plain',
          value:
            `Name: ${name}\n` +
            `Company: ${companyName}\n` +
            `Email: ${email}\n` +
            `Role: ${role}\n` +
            `Phone: ${phone}\n` +
            `Notes: ${message || 'N/A'}\n` +
            `Received: ${receivedAt}\n` +
            `IP: ${ip}\n` +
            `User-Agent: ${userAgent}\n` +
            `Referrer: ${referer}\n`
        }
      ]
    };

    const sendResponse = await fetch('https://api.mailchannels.net/tx/v1/send', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(mailChannelsPayload)
    });

    if (!sendResponse.ok) {
      const errorText = await sendResponse.text();
      return json(
        { ok: false, error: 'Email provider rejected request', details: errorText.slice(0, 500) },
        { status: 502 }
      );
    }

    return json({ ok: true });
  } catch (error) {
    return json(
      {
        ok: false,
        error: 'Unexpected server error',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

export async function onRequest() {
  return new Response('Method Not Allowed', {
    status: 405,
    headers: {
      Allow: 'POST, OPTIONS'
    }
  });
}
