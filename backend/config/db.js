const mongoose =require('mongoose');
const connect =mongoose.connect('mongodb+srv://Arvind:arvind@cluster0.3zokk8p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
module.exports ={connect};