require('../src/db/mongoose');
const Task = require('../src/models/task');

console.log('Hello from promise-chaining2.js');

Task.findByIdAndDelete('5e23197add634623e40d028a').then((task) => {
    console.log(task);
    return Task.countDocuments({ completed: false });
}).then((numberOfDocuments) => {
    console.log(numberOfDocuments);
}).catch((error) => {
    console.log(error);
});