/*var express = require('express');
var app = express();

app.get('/',function(req,res){
    res.send("Hello World")
});
module.exports = app*/
//app.listen(4000)

const dotenv = require('dotenv')
dotenv.config();
const tmi = require('tmi.js');
//set up options
const opts = {
    identity:{
        username: process.env.BOT_USERNAME,
        password: process.env.OAUTH_TOKEN
    },
    channels:[
        "quirkyduo"
    ]
};
console.log(process.env.BOT_USERNAME)
//create a new client
const client = new tmi.client(opts);
//Register event hanndlers
client.on('message', onMessageHandler);
client.on('connected',onConnectedHandler);

//export client so can be started easyer for testing
module.exports = client;

//message handler
function onMessageHandler(target,context,msg,self){
    console.log(msg)
}
//connected handler
function onConnectedHandler(addr, port){
    console.log('* connected to ${addr}:${port}');
}