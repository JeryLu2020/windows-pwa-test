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
            Modify(context, req.body);
        });
    } else {
        Modify(context, req.body);
    }

    function Modify(context, user){
        context.log('Modifing....' + user.userid);

        let obj = user.userinfo;
        // context.log(obj);        
        let newobj = removeEmpty(obj);
        // context.log(newobj);

        client.db(dbName).collection(collectionName).findOne({"_id" : ObjectId(user.userid)}, (err, data)=>{
            if(data == null || err) {
                context.res = { status: 404, body: "User doesn't exist" }
                context.done();
            }
            context.log(newobj);
            try{
                client.db(dbName).collection(collectionName).update({"_id" : ObjectId(user.userid)}, { $set: newobj });
            } catch (err) {
                context.res = { status: 500, body: err }
                context.done();
            }
            context.res = { status: 200, body: 'Modify success!' }
            context.done();
        })

    }

    function removeEmpty(obj) {
        Object.keys(obj).forEach(function(key) {
            if (obj[key] && typeof obj[key] === 'object') removeEmpty(obj[key])
            else if (obj[key] == null || obj[key] == '') delete obj[key]
        });
        return obj;
    };
};