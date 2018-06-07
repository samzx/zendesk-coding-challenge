const express = require('express');

const app = express();

const server = app.listen(8081, () => {

  const host = server.address().address
  const port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)
  app.get('/', (req, res) => {
    res.send('Hello Guy!');
  });

})