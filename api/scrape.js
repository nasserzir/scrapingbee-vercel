// api/scrape.js

const axios = require("axios");

module.exports = async (req, res) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: "Missing URL parameter" });
  }

  try {
    const response = await axios.get("https://app.scrapingbee.com/api/v1", {
      params: {
        api_key: process.env.SCRAPINGBEE_API_KEY,
        url,
      },
    });

    res.status(200).send(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
