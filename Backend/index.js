const express = require("express")
require('dotenv').config()
const cors = require('cors')
const { connection } = require("./db")
const { MarketplaceInventoryRouter } = require("./routes/MarketplaceInventory.route")
const { dealerRouter } = require("./routes/Dealer.route")
const { OEMRouter } = require("./routes/OEM.route")
const { auth } = require("./middleware/Auth.middleware")

const app=express()
app.use(cors())
app.use(express.json())

app.use("/dealer",dealerRouter)
app.use(auth)
app.use("/OEM",OEMRouter)
app.use("/MarketplaceInventory",MarketplaceInventoryRouter)

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