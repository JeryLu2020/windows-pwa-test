const mongodb = require("mongodb");
const mongourl = "****";
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
            Delete(req.body.userid);
        });
    } else {
        // findAll();
        // Create();
    }

    function Delete(userid){
        client.db(dbName).collection(collectionName).findByIdAndRemove(userid,(error, docs) => {
            if (error) {
                context.log('Error running query');
                context.res = { status: 500, body: res.stack }
                context.done();
            }

            context.log('>>>>>>>>>>>>>>>Delete Success!');
            context.res = {
                headers: { 'Content-Type': 'application/json' },
                body: "Delete Success"
            };
            context.done();
        });
    }
};