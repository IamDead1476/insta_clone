const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

router.post('/createpost',(req,res)=>{
    const {title,body} = req.body
    if(!title || !body){
        return res.status(422).json({error:"Please add all the fields..."})
    }
    const Post = new Post({
        title,
        body,
        postedBy:req.user

    })
    post.save().then(result=>{
        res.json({post:result})
    })
    .catch(err=>{
        console.log(err)
    })
})