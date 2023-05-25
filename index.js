const express = require("express")
const { connection } = require("./db")
require('dotenv').config()
const cors = require('cors')

const app=express()
app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Home page")
})


app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log("connected to DB")
    }catch(err){
        console.log('err:', err)
    }
    console.log(`server running at PORT ${process.env.port}`)
})

// --------------------------------------------------------