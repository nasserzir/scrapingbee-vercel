export default async function handler(req, res) {
  // Beispielantwort ohne ScrapingBee
  res.status(200).json({
    success: true,
    message: 'Die API funktioniert auf Vercel!',
    timestamp: new Date().toISOString()
  });
}
