const express = require('express');
const app = express();
const port = 3000;

app.get('/hello', (req, res) => {
    res.send('Task Manager');
})

app.listen(port, console.log(`server is listening in ${port}`));