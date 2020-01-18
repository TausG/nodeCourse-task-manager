const mongoose = require('mongoose');

const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        required: false,
        default: false
    }
});

// const aTask = new Task({
//     description: 'Learn Mongoose',
//     completed:  false
// });

// aTask.save().then((aTask) => {
//     console.log(aTask);
// }).catch((error) => {
//     console.log('Error', error);
// });

module.exports = Task;