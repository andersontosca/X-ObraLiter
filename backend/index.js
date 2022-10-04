require('./src/config/conexao');

const express = require('express');
const session = require('express-session');
const port = (process.env.port || 3001);

//express 
const app = express();

app.use(express.json()); 
app.use(session({
        secret:'sgsadfa21agsdsdfg4s5d*487as/asa.f0g5s4fg5s4dfg54sdf5g64sd56f4g56sd4f??!!',
        resave: true,
        saveUninitialized:true})) 

 
//config
app.set('port',port);

//rotas
app.use('/api',require('./src/rotas'));

//iniciar express 

app.listen(app.get('port'),(error)=>{
    if(error){
        console.log('erro' + error)
    }else{
        console.log("foi")
    }
})