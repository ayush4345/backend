const express = require('express');
const bodyParser = require('body-parser');
const rateLimit = require('express-rate-limit');

const app = express();

// Create a rate limiter middleware
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 5, // limit each IP to 5 requests per windowMs
  message: 'Too many requests from this IP, please try again later',
});

app.use('/post', limiter);

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

// Add a POST route
app.post('/post', (req, res) => {
  console.log('Request Body:', req.body);
  console.log('Raw Body:', req.rawBody);
  res.send('POST request received');
});

// Start the server
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});