const express=require("express");
const moongose=require("mongoose");

const uri = "mongodb+srv://eramsana8:eramsana@123@cluster0.jlggs.mongodb.net/sample?retryWrites=true&w=majority";

const app=express();


moongose.connect(uri,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

app.use(express.urlencoded({extended:true}));

app.use(express.static("public"));

app.set("view engine","ejs");

app.use(require("./routes/index"));

app.use(require("./routes/todo"));

app.listen(3000,()=>console.log("server started listening n port 3000"));