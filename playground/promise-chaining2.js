require('../src/db/mongoose');
const Task = require('../src/models/task');

console.log('Hello from promise-chaining2.js');

// Task.findByIdAndDelete('5e23197add634623e40d028a').then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
// }).then((numberOfDocuments) => {
//     console.log(numberOfDocuments);
// }).catch((error) => {
//     console.log(error);
// });

const deleteTaskAndCount = async (id) => {
    await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({ completed: false });
    return count;
};

deleteTaskAndCount('5e2319936c43de08780371e0').then((count) => {
    console.log(count);
}).catch((error) => {
    console.log(error);
});