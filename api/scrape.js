export default async function handler(req, res) {
  const apiKey = process.env.SCRAPINGBEE_API_KEY;
  const targetUrl = req.query.url;

  if (!apiKey || !targetUrl) {
    return res.status(400).json({ error: 'Missing API key or URL' });
  }

  try {
    const response = await fetch(`https://app.scrapingbee.com/api/v1/?api_key=${apiKey}&url=${encodeURIComponent(targetUrl)}&render_js=false`);
    const html = await response.text();

    const titleMatch = html.match(/<title>(.*?)<\/title>/i);
    const title = titleMatch ? titleMatch[1] : 'Kein Titel gefunden';

    res.status(200).json({ title });
  } catch (error) {
    res.status(500).json({ error: 'Fehler beim Scraping-Vorgang' });
  }
}
