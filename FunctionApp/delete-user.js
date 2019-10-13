const mongodb = require("mongodb");
const mongourl = "****";
const dbName = "React";
const collectionName = "heros";
var ObjectId = require('mongodb').ObjectID;

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
            Delete(context, req.body.userid);
        });
    } else {
        // findAll();
        Delete(context, req.body.userid);
    }

    function Delete(context, userid){
        context.log('Deleting....' + userid);

        try{   
            client.db(dbName).collection(collectionName).remove({"_id" : ObjectId(userid)}, true);
        } catch(err) {
            context.log('Error running query'+ err);
            context.res = { status: 500, body: err }
            context.done();
        }
        context.log('>>>>>>>>>>>>>>>Delete Success!');
        context.res = {
            status: 200,
            body: '>>>>>>>>>>>>>>>Delete Success!'
        };
        context.done();
    }
};