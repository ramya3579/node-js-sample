const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Docker + Jenkins!');
});

// ✅ Add this part if it's missing:
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
