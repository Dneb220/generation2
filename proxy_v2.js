
export default async function handler(req, res) {
  const targetUrl = 'https://imagegen-api.vercel.app/api/generate';

  try {
    const response = await fetch(targetUrl, {
      method: req.method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: req.method === 'POST' ? JSON.stringify(req.body) : null,
    });

    const data = await response.json();

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    res.status(response.status).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка при обработке запроса' });
  }
}
