const express = require('express');
const verifyToken = require('./middlewares/authMiddlewares');

const app = express();

app.use(verifyToken);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
