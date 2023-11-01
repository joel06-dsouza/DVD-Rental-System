/* // server.js

const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;
const secretKey = 'yourSecretKey'; // Change this to a secure secret key

app.use(cors());
app.use(bodyParser.json());

// Sample users (in-memory storage; replace with a database in a real app)
const users = [
  { id: 1, username: 'admin', password: 'mukul' },
];

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Simulate user authentication; replace with database query
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    
    const token = jwt.sign({ userId: user.id, username: user.username }, secretKey, { expiresIn: '10ms' });
    console.log('MyFrontendToken : ',token);
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Authentication failed' });
  }
});

// Registration endpoint
app.post('/register', (req, res) => {
  const { username, password } = req.body;

  // Simulate user registration; replace with database insertion
  const newUser = { id: users.length + 1, username, password };
  users.push(newUser);

  res.status(201).json({ message: 'Registration successful' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
 */