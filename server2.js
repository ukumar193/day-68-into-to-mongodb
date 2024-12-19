let mongoose =require("mongoose");

let connect2MDB = async ()=>{

     try{ mongoose.connect("mongodb+srv://ukumar:ukumar@merndata.ajemg.mongodb.net/?retryWrites=true&w=majority&appName=MernData");
     console.log("connected mongoose2")
     }
     catch(err){
          console.log("not connected")
     }

    

}
connect2MDB();