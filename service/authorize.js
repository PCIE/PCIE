var bcrypt = require('bcrypt-nodejs');
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');

var secret = 'n8jTwiRYBtJF25Wpk7X1fRvtxDrKs8P5lXP16DqytRwa0Pfa6omupI5YWgGjF3kUeP4F08LeklnwCQGoDMouLZcija8aRZaMEBQdrDSjRp9OGnVrfrZqosHE';

exports.authorize = function (req, res) {

    var profile = {};
    var token = {};

    console.log("test1");

    var input = JSON.parse(JSON.stringify(req.body));

    console.log(input);

    console.log("test2");

    req.getConnection(function (err, connection) {


        var query = connection.query('select u.* from utilisateur u where u.mail=?', [input.email], function (err, rows) {
            if (err) {
                console.log("Error Selecting : %s ", err);
            }
            console.log("test3");

            console.log(rows);

            var user = JSON.parse(JSON.stringify(rows));

            console.log(user);

            var permissions = [];

            bcrypt.compare(input.password, user[0].hash, function (err, ret) {
                if (ret) {
                    console.log("test4");
                    profile = user[0];
                    permissions.push(profile.role);
                    profile.permissions = permissions;
                    console.log(secret);
                    token = jwt.sign(profile, secret, {expiresIn: 120 * 60});
                    user.token = token;
                    res.json({user: user});
                } else {
                    res.status(401).send('Wrong user or password');
                }
            });

        });

    });

};