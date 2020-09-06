const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/users');
const taskRouter = require('./routers/tasks');

const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('Get requests are disabled');
//     } else {
//         next();
//     }
// });

// app.use((req, res, next) => {
//     res.status(503).send('Server is currently down for maintenance, please try again later');
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log('Server is runnnig on port ' + port);
});