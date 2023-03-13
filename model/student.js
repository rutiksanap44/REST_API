const mongoose = require('mongoose')

const validator = require('validator')

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5
    },
    email: {
        type: String,
        required: true
        // unique: [true, "Email is already in use"],
        // validate(value) {
        //     if (validator.isEmail(value)) {
        //         throw new Error('Invalid Email')
        //     }
        // }
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    city: {
        type: String,
        requried: true
    }
})

const Student = new mongoose.model('Student', studentSchema)

module.exports = Student