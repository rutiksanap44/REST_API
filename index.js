const express = require('express')

require('./database/conn')

const app = express();

const port = process.env.PORT || 1403;

app.use(express.json())

const Student = require('./model/student')

app.post('/students', (req, res) => {
    console.log(req.body);
    const user = new Student(req.body)
    res.send('Hello from secondary')
    user.save();
})

app.listen(port, () => {
    console.log(`Server is up and Running on port ${port}`)
})