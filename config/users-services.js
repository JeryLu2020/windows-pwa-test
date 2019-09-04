var Hero = require('./database');

exports.create = (req, res) => {

    const hero = new Hero({
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
    });

    hero.save()
        .then(data => {
            // res.redirect('/users');
            console.log('success');
            return res.status(200).send(data);
        })
        .catch(err => {
            // return res.render('error', { errmsg: err });
            return res.status(500);
        })
};

exports.findAll = (req, res) => {
    //if(req.session.userId == process.env.ADMIN_ID){
    Hero.find()
        .then(data => {
            console.log('findAll success');
            // return res.render('Users', { layout: 'layout', usersData: data});
            return res.send(data);
        })
        .catch(err => {
            return res.render('error', { errmsg: err });
        })
    // } else {
    //     return res.render('error', { errmsg: "Please Login As Admintrator"});
    // }
};

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
    }, { new: true })
        .then(data => {
            if (!data) {
                return res.render('error', { errmsg: err });
            }
            // console.log(data._id);
            console.log('update success');
            return res.redirect('/users');
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                console.log('record not found' + req.params.Id);
                return res.render('error', { errmsg: err });
            }
            return res.render('error', { errmsg: err });
        });
};

exports.delete = (req, res) => {
    Hero.findByIdAndRemove(req.params.Id)
        .then(data => {
            if (!data) {
                return res.render('error', { errmsg: err });
            }
            console.log('delete success');
            // return res.redirect('/users');
            return res.status(200);
        })
        .catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                console.log('record not found' + req.params.Id);
                // return res.render('error', { errmsg: err });
                return res.status(500);
            }
            // return res.render('error', { errmsg: err });
            return res.status(500);
        });
};


exports.userregister = (req, res) => {
    const hero = new Hero({
        first_name: req.body.first_name || 'Unknown name',

        country_name: req.body.country_name || 'N/A',
        city_name: req.body.city_name || 'N/A',
        state_name: req.body.state_name || 'N/A',

        day_of_birth: req.body.day_of_birth || '',
        payment_card: req.body.payment_card || 'N/A',

        password: req.body.password || 'Undefined',
        email: req.body.email || 'Undefined',
    });

    hero.save()
        .then(data => {
            // res.redirect('/users');
            console.log('success');
            return res.status(200).send(data);
        })
        .catch(err => {
            // return res.render('error', { errmsg: err });
            return res.status(500);
        })
};

exports.userlogin = (req, res) => {

    let loginname = req.body.username;
    let loginpassword = req.body.password;

    if (loginname == "admin" && loginpassword == "Admin123") {
        Hero.findOne({ username: "admin", password: "Admin123" })
            .then(data => {
                if (!data) {
                    // return res.render('error', { errmsg: err });
                    return res.send('error');
                }
                req.session.userId = data._id;
                req.session.username = data.email;
                console.log(data.email);
                // return res.redirect('/users');
                console.log(data);
                return res.status(200).send(data);
            })
            .catch(err => {
                if (err.kind === 'ObjectId') {
                    // return res.render('error', { errmsg: err });
                    console.log(data);
                    return res.status(500);
                }
                // return res.render('error', { errmsg: err });
                console.log(data);
                return res.status(500);
            });
    } else {
        // return res.render('error', { errmsg: "Sorry, this site is for admintrastor only" });
        console.log(data);
        // return res.send('Sorry, this site is for admintrastor only');
        return res.status(500);
    }
}

exports.userlogout = (req, res) => {
    if (req.session) {
        // delete session object
        req.session.destroy(function (err) {
            if (err) {
                return res.render('error', { errmsg: err });
            } else {
                return res.redirect('/');
            }
        });
    }
    else {
        return res.redirect('/');
    }
};

exports.getSession = (req, res) => {
    let useremail = req.session.username;
    console.log("req.session.username"+useremail);
    if(useremail){
        return res.send(useremail);
    } else {
        console.log('hello');
        return res.status(500);
    }
};