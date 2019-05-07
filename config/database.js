//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb://jerytest:IZ8nYAVROPoQL8kSalbtMwsAhBK8oKft7IdNMm6NFXHrPwinNVmxrGsmURfSD8N5yxFemsMRtIxX5DWG6epJ1A==@jerytest.documents.azure.com:10255/React?ssl=true&replicaSet=globaldb';
mongoose.connect(mongoDB, { useNewUrlParser: true });

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));