const mongodb = require("mongodb");
const mongourl = "*****";
const dbName = "React";
const collectionName = "heros";

let client = null;

module.exports = function (context, req) {
    context.log('Running');

    let hasClient = client != null;

    if(client == null){
        mongodb.MongoClient.connect(mongourl, function (error, _client) {
            if (error) {
                context.log('Failed to connect');
                context.res = { status: 500, body: res.stack }
                return context.done();
            }
            client = _client;
            context.log('Connected');
            findAll(context);
        });
    } else {
        // findAll();
        // Create();
    }

    function findAll(context){
        client.db(dbName).collection(collectionName).find().toArray(function (error, docs) {
            if (error) {
                context.log('Error running query');
                context.res = { status: 500, body: res.stack }
                context.done();
            }

            context.log('>>>>>>>>>>>>>>>Find ALL Success!');
            context.res = {
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ res: docs })
            };
            context.done();
        });
    }

};