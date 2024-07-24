import express from 'express';
//import cors from 'cors';
const app=express()
// app.use(cors());
const port = process.env.PORT || 3000;
 
app.get('/',(req,res)=>{
     res.send("hello");
})
app.get('/api/jokes',(req,res)=>{
     const jokes=[{
        id:1,title:"arvind",content:"smart"
     },{ id:2,title:"suresh",content:"best"},
     { id:3,title:"jabraram",content:"legend"},
     { id:4,title:"ganpat",content:"business"},
     { id:5,title:"pooja",content:"influencer"}]
    res.send(jokes);
})
app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`)
})