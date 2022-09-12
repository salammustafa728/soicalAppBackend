import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';

const app = express();
dotenv.config();
app.use(bodyParser.json({limit:'30mb', extended: true}))
app.use(bodyParser.urlencoded({limit:'30mb', extended: true}))

app.use(cors());

app.use('/posts',postRoutes);

//basic route
app.use('/',(req,res)=>{
    res.send('Hello to memories API');
})
//make Proc

const CONNECTION_URL = process.env.CONNECTION_URL;
//'mongodb+srv://salammustafa728:root@cluster0.t6y17nj.mongodb.net/?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
.then(()=>app.listen(PORT,()=>console.log(`Server running on: ${PORT}`)))
.catch((error)=>console.log(error.message))

// mongoose.set('useFindAndModify', false);