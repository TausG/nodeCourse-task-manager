const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database');
    }

    const db = client.db(databaseName);

    // db.collection('users').findOne({ _id: new ObjectID("5dcc2b9f11150312b0b30bfb") }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable');
    //     }

    //     console.log(user);        
    // });

    // db.collection('users').find({ name: 'Taus' }).toArray((error, users) => {
    //     console.log(users);
    // });

    // db.collection('users').find({ name: 'Taus' }).count((error, count) => {
    //     console.log(count);
    // });

    db.collection('tasks').find({  }).toArray((error, tasks) => {
        if (error) {
            return console.log(error);
        }

        if (tasks.length === 0) {
            return console.log('No tasks in DB');
        }

        const taskId = tasks[tasks.length-1]._id;
        
        db.collection('tasks').findOne({ _id: new ObjectID(taskId) }, (error, task) => {
            if (error) {
                return console.log(error);
            }

            console.log(task);
        });
    });

    db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
        if (error) {
            return console.log(error);
        }

        if (tasks.length === 0) {
            return console.log('No tasks in DB');
        }

        console.log(tasks)

    });
});