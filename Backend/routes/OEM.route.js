const express = require("express")
const { OEMSpecsModel } = require("../model/oem.model")
const OEMRouter = express.Router()

// get OEM Data
OEMRouter.get("/",async(req,res)=>{
    try{
        const notes = await OEMSpecsModel.find()
        res.send(notes)
    }catch(err){
        console.log({"msg":"Error Occured","error":err})
    }
})


// First Time OEM data POST
OEMRouter.post("/post",async(req,res)=>{
    const data = req.body.data
    console.log('data:', data)
    try{
        const notes = await OEMSpecsModel.insertMany(data)
        res.send(notes)
    }catch(err){
        console.log({"msg":"Error Occured","error":err})
    }
})
module.exports={
    OEMRouter
}
// --------------------------------------------------------