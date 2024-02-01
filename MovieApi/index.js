const express = require('express');
const axios = require('axios');
const app = express();
const port = 5000; // Choose your desired port

app.get('/latest_movies', async (req, res) => {
  const searchQuery = "latest upcoming movies"; // Get the search query from the URL query parameter
  if (!searchQuery) {
    return res.status(400).json({ error: 'Missing search query' });
  }

  try {
    const googleResponse = await axios.get(`https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`);
    res.send("Hello");
  } catch (error) {
    console.error('Error performing Google search:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.listen(port, () => {
  console.log(`Express server is running on port ${port}`);
});
