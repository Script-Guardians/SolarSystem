const express = require('express')
const request = require('request')
const axios = require('axios')
const cors = require('cors')


const PORT = 8080
const app = express()


// Middleware...
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Serve the built React app
app.use(express.static('build'));

// Handle requests to the root URL
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/build/index.html');
});


// API Endpoints
app.get('/planets', (req, res) => {
  const name = req.query.name;
  const options = {
    url: 'https://api.api-ninjas.com/v1/planets?name=' + name,
    headers: {
      'X-Api-Key': 'GyVLRiMNYTbqEQmk6v2Fow==eo6gcx0ALMACZaQi'
    }
  };

  request(options, (error, response, body) => {
    if (error) {
      console.error('Request failed:', error);
      res.status(500).json({ message: 'Request failed' });
    } else if (response.statusCode !== 200) {
      console.error('Error:', response.statusCode, body.toString('utf8'));
      res.status(response.statusCode).json({ message: 'Error' });
    } else {
      console.log(body);
      res.json(JSON.parse(body));
    }
  });
});


app.get('/bodies/:id', async (req, res) => {
  const { id } = req.params;
  const url = `https://api.le-systeme-solaire.net/rest/bodies/${id}`;

  try {
    const response = await axios.get(url);
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Error retrieving data' });
  }
});


app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

