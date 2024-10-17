const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/api/data', async (req, res) => {
  try {
    const response = await axios.get('"https://g1573d51ff99280-ziog604abobz9lyd.adb.eu-madrid-1.oraclecloudapps.com/ords/caja/listadoutf8/<VALUE>"');
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Error fetching data');
  }
});

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});
