var express = require('express');
var app = express();
const port =8080;
var myUsers = ['Aman','Anurag','Harry'];

app.get('/listUsers',function(req,res){
    res.send(myUsers);
}); //GET:http://localhost:3000/listUsers

app.put('/addUser',function(req,res){
    myUsers.push(req.query.name);
    res.send(myUsers);
}); //PUT:http://localhost:3000/addUser?name=Sankalp

app.delete('/deleteUser',function(req,res){
    myUsers.splice(req.query.start,req.query.deleteCount);
    res.send(myUsers);
}); //DELETE:http://localhost:3000/deleteUser?start=1&deleteCount=1

app.post('/updateUser',function(req,res){
    myUsers[req.query.index]=req.query.name;
    res.send(myUsers);
}); //POST:http://localhost:3000/updateUser?index=1&name=Sankalp

app.listen(port, () =>{
    console.log("API running at http://localhost:"+port);
})