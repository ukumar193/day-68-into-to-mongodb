let mongoose = require("mongoose");
let server2 = require("./server2");

let connectMDB= async ()=>{

    try{
     await mongoose.connect("mongodb+srv://ukumar:ukumar@merndata.ajemg.mongodb.net/?retryWrites=true&w=majority&appName=MernData");

     console.log("connected to mongoose1")
    }catch(err){
     console.log("error not connected to mongoose")
     }

    
};
connectMDB();