const express = require('express');
const app = express();
const port = 8080;

app.listen(port, () => { 
    console.log(`Server is running on port ${port}`);
});

app.use((req, res, next) => {
  req.startTime = Date.now();
  next();
});

app.get('/', (req, res) => {
  const timeTaken = Date.now() - req.startTime;
  res.send({
    message: 'Hello from EU Server!',
    time: new Date().toISOString(),
    status: 200,
    timeTaken: `${timeTaken}ms`
  });
});