const express = require('express');
const app = express();
const PORT = 8080;

app.use('/web', express.static('web'))
app.use('/', express.static(__dirname))

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
