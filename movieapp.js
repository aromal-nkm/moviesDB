const express=require('express')
const routes=require('./routes/movieroutes')
const app=express()
require('dotenv').config();
const PORT=process.env.PORT
require('./db/connection')


app.use('/routes',routes)

app.listen(PORT,()=>{
    console.log(`server is running on PORT ${PORT}`)
})