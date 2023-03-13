const express = require('express')

require('./database/conn')

const app = express();

const port = process.env.PORT || 1403;

app.get('/', (req, res) => {
    res.send('Hello from primary')
})

app.post('/students', (req, res) => {
    res.send('Hello from secondary')
})

app.listen(port, () => {
    console.log(`Server is up and Running on port ${port}`)
})