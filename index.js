import express from 'express';
const app = express();

app.get("/api", function(req, res){
  res.json({ msg : "My first API is created"});
});

//let PORT = process.env.PORT || 3007;
const PORT = process.env.PORT || 3011;

app.listen(PORT, function(){
  console.log('App starting on port', PORT);
});

//app.listen(PORT, function() {});