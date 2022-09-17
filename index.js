const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = 3000
const AuthRoute = require('./Routes/AuthRoute.js')
const DataRoute = require('./Routes/DataRoute.js')

app.use(express.json())


mongoose.connect(
    "mongodb://127.0.0.1:27017/auth",
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log('Connected to MongoDB');
    }
  );


app.use('/auth',AuthRoute)
app.use('/getData', DataRoute)


app.listen(port,()=>{
    console.log('listening')
})


