var Hero = require('./database');

exports.create = (req, res) => {
    const hero = new Hero({
        first_name: req.body.first_name || 'Unknown name',
        middle_initial: req.body.middle_initial || 'N/A',
        last_name: req.body.last_name || 'N/A',
        street_address: req.body.street_address || 'N/A',
        city_name: req.body.city_name || 'N/A',
        payment_card: req.body.payment_card || 'N/A',
        country_name: req.body.country_name || 'N/A',
        day_of_birth: req.body.day_of_birth || '',
    });

    hero.save()
        .then(data=>{
            console.log(data);
            res.redirect('/users');
        })
        .catch(err =>{
            res.status(500).send("failed to create"+err);
        })
};

exports.findAll = (req, res) => {
    Hero.find()
        .then(data =>{
            // res.send(data);
            console.log('findAll success');
            res.render('Users', { layout: 'layout', usersData: data});
        })
        .catch(err=>{
            res.status(500).send('failed to findall' + err);
        })
};

exports.findOne = (req, res) => {
    Hero.findById(req.params.Id)
    .then(data=>{
        if(!data){
            return res.statue(404).send('record not found' + req.params.Id);
        }
        console.log('findOne success');
        return res.send(data);
    })
    .catch(err=>{
        if(err.kind === 'ObjectId'){
            return res.status(404).send('record not found' + req.params.Id);
        }
        return res.status(500).send('error updating with Id' + req.params.Id)
    });
};

exports.update = (req, res) => {
    Hero.findByIdAndUpdate(req.params.Id, {
        name: req.body.name || "Untitled name",
        message: req.body.message
    }, {new: true})
    .then(data => {
        if(!data){
            return res.status(404).send('record not found' + req.params.Id);
        }
        console.log('update success');
        return res.redirect('/users');
    })
    .catch(err=>{
        if(err.kind === 'ObjectId'){
            console.log('record not found' + req.params.Id);
            return res.status(404).send('record not found' + req.params.Id);
        }
        return res.status(500).send('error updating record with Id' + req.params.Id)
    });
};

exports.delete = (req, res) => {
    Hero.findByIdAndRemove(req.params.Id)
    .then(data=>{
        if(!data){
            return res.status(404).send('record not found' + req.params.Id);
        }
        console.log('delete success');
        res.redirect('/users');
    })
    .catch(err=>{
        if(err.kind === 'ObjectId' || err.name === 'NotFound'){
            console.log('record not found' + req.params.Id);
            return res.status(404).send('record not found' + req.params.Id);
        }
        return res.status(500).send('error deleting record with Id' + req.params.Id)
    });
};