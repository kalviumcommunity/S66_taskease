const express = require("express");
const app = express()

const port =9090

app.get("/ping", (req,res)=>{
    res.send("pong");
})

app.listen(port,()=>{
    console.log(`server is running on port http://localhost:${port}`)
})