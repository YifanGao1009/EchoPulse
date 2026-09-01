export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'POST') {
    res.status(405).json({ error: { message: 'Method not allowed' } });
    return;
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: { message: 'OPENAI_API_KEY is not set on the server.' } });
    return;
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const payload = body?.payload;

    if (!payload || typeof payload !== 'object') {
      res.status(400).json({ error: { message: 'Missing analysis payload.' } });
      return;
    }

    const response = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(payload),
    });

    const data = await response.text();
    res.statusCode = response.status;
    res.setHeader('Content-Type', 'application/json');
    res.end(data);
  } catch (error) {
    res.status(502).json({ error: { message: error.message || 'API request failed.' } });
  }
}
