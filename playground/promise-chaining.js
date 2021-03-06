require('../src/db/mongoose');
const User = require('../src/models/user');


// User.findByIdAndUpdate('5dd01ae5ff99db117c24315f', { age: 1 }).then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 1 });
// }).then((numberOfDocuments) => {
//     console.log(numberOfDocuments);
// }).catch((error) => {
//     console.log(error);
// });

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age });
    const count = await User.countDocuments({ age });
    return count;
};

updateAgeAndCount('5dd01ae5ff99db117c24315f', 2).then((count) => {
    console.log(count);
}).catch((error) => {
    console.log(error);
});