const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { userModel } = require("../models/user.model");
require("dotenv").config();

const userRouter = express.Router();

userRouter.post("/register",async(req,res)=>{
  const {email,pass,name,age} =req.body;
  try{
      bcrypt.hash(pass,5,async(err,secure_pass)=>{
      if(err){
          console.log(err)
      }else{
          const user =new userModel({email,pass:secure_pass,name,age})
          await user.save()
          res.send("Registered")
      }
      })
  }catch(err){
  res.send("err happened in post request")
  }
})

userRouter.post("/login",async (req,res)=>{
  const {email,pass}=req.body
  try{
  const user=await userModel.find({email})
  if(user.length>0){
      bcrypt.compare(pass,user[0].pass,(err,result)=>{
  if(result){
      const token=jwt.sign({course:"backend"},"kuchhvvvvv")
      res.send({"msg":"Login Successful","token":token})
  }else{
      res.send("wrong crendentials")
  }
      });
  } else {
  res.send("Login Failed")
  }
  } catch(err){
  console.log(err)
  }
  })

  module.exports={userRouter}