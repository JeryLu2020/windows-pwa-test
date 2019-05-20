var Hero = require('./database');

exports.create = (req, res) => {

    const hero = new Hero({
        first_name: req.body.first_name || 'Unknown name',
        middle_initial: req.body.middle_initial || 'N/A',
        last_name: req.body.last_name || 'N/A',
        street_address: req.body.street_address || 'N/A',
        city_name: req.body.city_name || 'N/A',
        payment_card: req.body.payment_card || 'N/A',
        state_name: req.body.state_name || 'N/A',
        day_of_birth: req.body.day_of_birth || '',
        
        username: req.body.username || 'Undefined',
        password: req.body.password || '',
        email: req.body.email || 'Undefined',
    });

    hero.save()
        .then(data=>{
            res.redirect('/users');
        })
        .catch(err =>{
            res.status(500).send("failed to create"+err);
        })
};

exports.findAll = (req, res) => {
    if(req.session.userId == "administrator"){
        Hero.find()
            .then(data =>{
                // res.send(data);
                console.log('findAll success');
                return res.render('Users', { layout: 'layout', usersData: data});
            })
            .catch(err=>{
                return res.status(500).send('failed to findall' + err);
            })
    } else if(req.session.userId) {
        return res.render('error', { errmsg: "Please Login As Admintrator"});
    } else {
        return res.render('error', { errmsg: "Please Login First"});
    }
};

// exports.findOne = (req, res) => {
//     Hero.findById(req.session.userId)
//         .then(data=>{
//             if(!data){
//                 return res.statue(404).send('record not found' + req.params.Id);
//             }
//             console.log('findOne success');
//             // res.send('<h2>Your name: </h2>' + data.username + '<h2>Your password: </h2>' + data.password);
//             res.render('index', { layout: 'layout', userprofiler : data.username});
//         })
//         .catch(err=>{
//             if(err.kind === 'ObjectId'){
//                 return res.status(404).send('record not found' + req.params.Id);
//             }
//             return res.status(500).send('error findone with Id' + req.params.Id)
//         });
// };

exports.update = (req, res) => {
    Hero.findByIdAndUpdate(req.params.Id, {
        state_name: req.body.state_name || 'N/A',
        first_name: req.body.first_name || 'Unknown name',
        middle_initial: req.body.middle_initial || 'N/A',
        last_name: req.body.last_name || 'N/A',
        street_address: req.body.street_address || 'N/A',
        city_name: req.body.city_name || 'N/A',
        payment_card: req.body.payment_card || 'N/A',
        day_of_birth: req.body.day_of_birth || '',
        
        username: req.body.username || 'Undefined',
        password: req.body.password || '',
        email: req.body.email || 'Undefined',
    }, {new: true})
    .then(data => {
        if(!data){
            return res.status(404).send('record not found' + req.params.Id);
        }
        // console.log(data._id);
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
        return res.redirect('/users');
    })
    .catch(err=>{
        if(err.kind === 'ObjectId' || err.name === 'NotFound'){
            console.log('record not found' + req.params.Id);
            return res.status(404).send('record not found' + req.params.Id);
        }
        return res.status(500).send('error deleting record with Id' + req.params.Id)
    });
};


exports.userregister = (req, res) => {

    const hero = new Hero({
        first_name: req.body.first_name || 'Unknown name',
        middle_initial: req.body.middle_initial || 'N/A',
        last_name: req.body.last_name || 'N/A',
        street_address: req.body.street_address || 'N/A',
        city_name: req.body.city_name || 'N/A',
        payment_card: req.body.payment_card || 'N/A',
        state_name: req.body.state_name || 'N/A',
        day_of_birth: req.body.day_of_birth || '',
        
        username: req.body.username || 'Undefined',
        password: req.body.password || '',
        email: req.body.email || 'Undefined',
    });

    hero.save()
        .then(data=>{
            // console.log("data._id>>>" + data._id);
            return res.redirect('/');
        })
        .catch(err =>{
            return res.status(500).send("failed to register"+err);
        })
};

exports.userlogin = (req, res) => {

    let loginname = req.body.username;
    let loginpassword = req.body.password;

    if(loginname=="admin" && loginpassword=="admin"){
        req.session.userId = "administrator";
        return res.redirect('/users');
    } else {
        Hero.findOne({ username: loginname, password: loginpassword})
            .then(data=>{
                if(!data){
                    res.statue(404).send('User not found' + req.params.Id);
                }
                console.log('login success' + data._id);
                // let userProfiler = JSON.parse(JSON.stringify(data));
                // console.log("jsonobj:" + userProfiler[0]._id);
                req.session.userId = data._id;
                return res.redirect('/');
            })
            .catch(err=>{
                if(err.kind === 'ObjectId'){
                    return res.status(404).send('User not found' + req.params.Id);
                }
                return res.status(500).send('failed to login' + req.params.Id)
            });
    }
}

exports.userlogout = (req, res) => {
    if (req.session) {
      // delete session object
      req.session.destroy(function (err) {
        if (err) {
          return next(err);
        } else {
          return res.redirect('/');
        }
      });
    }
    else{
        return res.redirect('/');
    }
};