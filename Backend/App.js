const express=require('express');
const app=express();

const mongoose=require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.DB_URI)
    .then(()=> console.log('Connected to MongoDB'))
    .catch((error)=>console.error('MongoDB connection error',error));

const TaskRouter=require('./Routes/taskRoutes')
app.use('/api',TaskRouter);

const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})