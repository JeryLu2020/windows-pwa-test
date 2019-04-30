'use strict';
var express = require('express');
var router = express.Router();
var webpush = require('web-push');

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});

router.get('/offline.html', function (req, res) {
    res.sendFile('./public/offline.html');
});

const vapidKeys = {
    publicKey: 'BEMfRcAX4im5y-HCzekGioWNMHIt0Rt0VMZeI6K0X37CjeKZApMI3AwrDbRV5XQiJdyC_TmOaPrufp06m1L16lo',
    privateKey: '1UaOETa_csb83cZsJlqvib1PtHqpPYKA1B9_d6o3cDU'
};

webpush.setVapidDetails(
    'mailto:pwa@example.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);

router.get('/vapidPublicKey', function (req, res) {
    res.send(vapidKeys.publicKey);
});

router.post('/register', function (req, res) {
    // A real world application would store the subscription info.
    res.sendStatus(201);
});

router.post('/sendNotification', function (req, res) {
    const subscription = req.body.subscription;
    const payload = 'notification';
    const options = null;

    webpush.sendNotification(subscription, payload, options)
        .then(function () {
            res.sendStatus(201);
        })
        .catch(function (error) {
            res.sendStatus(500);
            console.log(error);
        });
});


module.exports = router;
