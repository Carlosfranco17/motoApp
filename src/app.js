const express = require("express");



const usersRouter = require("./routes/users.routes");

const repairsRouter = require("./routes/repairs.routes");

const app = express();


app.use(express.json());



// app.use(helloMiddleware);


app.use((req,res,next)=>{

const time= new Date().toISOString()

req.requesTime=time

next()

});



app.use("/api/v1/users", usersRouter);

// app.use("/api/v1/repairs", repairsRouter);


module.exports=app


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
  });