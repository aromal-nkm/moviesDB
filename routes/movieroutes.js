const express=require('express')
const router=express.Router()
const movieModel=require('../model/movieData')
router.use(express.json())
router.use(express.urlencoded({extended:true}))
// GET
router.get('/get',async (req,res)=>{
    try{
const data=await movieModel.find();
res.send(data);
    }catch(error){
        res.status(404).send('data not found')
    }
})

//POST OP
router.post('/postmovie',async (req,res)=>{
    try{
       var item=req.body;
       const data1=new movieModel(item)
       const saveddata=await data1.save();
       res.status(200).send('post sucessfully')
    } catch (error){
        res.status(404).send('post  unsucessfully')
    }


})
// put op
router.put('/put/:id',async(req,res)=>{
    try {
        const id=req.params.id;
        const data=await movieModel.findByIdAndUpdate(id,req.body)
        res.status(200).send('updated')
    } catch (error) {
        res.status(200).send('updated unsuccessfully')
    }
}) 
router.delete('/delete/:id',async(req,res)=>{
    try {
        const id=req.params.id;
        const data=await movieModel.findByIdAndDelete(id)
        res.status(200).send('deleted')
    } catch (error) {
        res.status(200).send('deleted unsuccessfully')
    }
}) 









module.exports=router