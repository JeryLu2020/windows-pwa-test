const mongodb = require("mongodb");
const mongourl = process.env.MONGODB_URL;
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

        client.db(dbName).collection(collectionName).findOne({"_id" : ObjectId(userid)}, (err, data)=>{
            if(data == null || err) {
                context.res = { status: 404, body: "User doesn't exist" }
                context.done();
            } else {
                context.log(data);
                context.res = { status: 200, body: "User exist" }
                context.done();
            }
        })
    }
};