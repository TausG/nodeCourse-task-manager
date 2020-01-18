const mongoose = require('mongoose');
const validator = require('validator');

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number')
            }
        },
        default: 0
    },
    email: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is not valid')
            }
        },
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password must not contain password')
            }
        }
    }     
});

// const me = new User({
//     name: 'Taus       ',
//     email: '      taus@hotmail.COM',
//     password: 'myPhone098!'
// });

// me.save().then((me) => {
//     console.log(me);
// }).catch((error) => {
//     console.log('Error', error);
// })

module.exports = User;