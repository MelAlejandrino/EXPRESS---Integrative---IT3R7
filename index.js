const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());

// connection
const uri = "mongodb://127.0.0.1:27017/admin";
mongoose.connect(uri).then(()=> {
    console.log('connected to mongodb')
});

// routes
const adminRoute = require('./routes/Admins.route');
const facultyRoute = require('./routes/Faculty.route');
const operatorRoute = require('./routes/ITOperators.route');
const studentRoute = require('./routes/Students.route');
const teacherRoute = require('./routes/Teachers.route');
const userRoute = require('./routes/Users.route');

// use of routes

app.get('/', (req,res) => {
    res.send("Welcome to USTP Dashboard");
})
app.use('/admin', adminRoute);
app.use('/faculty', facultyRoute);
app.use('/operators', operatorRoute);
app.use('/teacher', teacherRoute);
app.use('/user', userRoute);
app.use('/student', studentRoute);

//Error if wrong endpoint
app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err)
})

//Middleware Express handler
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        error: {
            status: err.status || 500,
            message: err.message
        }
    })
})

app.listen(4000, () => {
    console.log('istening on port 4000!')
})