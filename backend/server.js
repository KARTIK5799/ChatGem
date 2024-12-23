import http from 'http';
import app from './app.js';
import dotenv from 'dotenv';
dotenv.config();


const port= process.env.PORT || 7000;
const server = http.createServer(app);



server.listen(port,()=>{
    console.log(`server is runnging on ${port}`)
})