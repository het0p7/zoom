import express from "express";
import {createServer} from "node:http";

import {Server} from "socket.io";

import mongoose from "mongoose";

import cors from "cors";

const port = 8000;

 const app = express();

 app.get("/home"  , (req,res)=>{
    return res.json({"hello" : "world"})
 }); 

 const start = async ()=>{
    
    app.listen(port, ()=>{
        console.log("listening on port 8000");
    })
 }


 start();