const express = require('express');
const app = express();
const PORT = 8080;

app.use('/', express.static(__dirname))
app.use('/web', express.static('web'))

app.listen(PORT, () => {
  var url = `http://localhost:${PORT}`;
  var start =
  process.platform == "darwin"
    ? "open"
    : process.platform == "win32"
    ? "start"
    : "xdg-open";
  require("child_process").exec(start + " " + url);
  console.log(`Server listening on port: ${PORT}`)
});
