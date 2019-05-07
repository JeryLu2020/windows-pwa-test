//Import the mongoose module
var mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Set up default mongoose connection
var mongoDBurl = 'mongodb://jerytest:IZ8nYAVROPoQL8kSalbtMwsAhBK8oKft7IdNMm6NFXHrPwinNVmxrGsmURfSD8N5yxFemsMRtIxX5DWG6epJ1A==@jerytest.documents.azure.com:10255/React?ssl=true&replicaSet=globaldb';
mongoose.connect(mongoDBurl, { useNewUrlParser: true });

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', (callback) => {
    console.log('MongoDB connectted！！');
});

//create schema
const heroSchema = new Schema({
        // id: { type: Number, required: true, unique: true },
        name: String,
        message: String,
    },
    { timestamps: true }
);

//create model
const Hero = mongoose.model('Hero', heroSchema);
module.exports = Hero;