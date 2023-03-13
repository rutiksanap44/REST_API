const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/studentsrestapi', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connection Successfull');
}).catch((error) => {
    console.log('Connection Failed',error);
})
