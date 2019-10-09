const mongodb = require("mongodb");
const mongourl = "*******";
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
            // findAll();
            Create();
        });
    } else {
        // findAll();
        // Create();
    }

    function findAll(){
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

    function Create(){
        context.log(req.body);

        let newhero = {
            first_name: req.body.first_name || 'Unknown name',
            middle_initial: req.body.middle_initial || 'N/A',
            last_name: req.body.last_name || 'N/A',
            street_address: req.body.street_address || 'N/A',

            country_name: req.body.country_name || 'N/A',
            city_name: req.body.city_name || 'N/A',
            state_name: req.body.state_name || 'N/A',

            day_of_birth: req.body.day_of_birth || '',
            payment_card: req.body.payment_card || 'N/A',

            username: req.body.username || 'Undefined',
            password: req.body.password || '',
            email: req.body.email || 'Undefined',
        }

        client.db(dbName).collection(collectionName).insertOne(newhero, (err, docs) => {
            if(err){
                context.log('Error running query');
                context.res = { status: 500, body: res.stack }
                context.done();
            }
            context.log('>>>>>>>>>>>>>>>Create Success!');
            context.res = {
                status: 200,
                body: 200
            };
            context.done();
        })
    }

};