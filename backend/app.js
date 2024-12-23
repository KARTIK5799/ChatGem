import express from 'express';


const app= express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get('/',(req,res)=>{
    console.log(hello);
})

export default app;