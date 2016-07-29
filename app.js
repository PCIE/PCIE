/**
 * Module dependencies.
 */

var express = require('express');
var dao = require('./dao');
var http = require('http');
var path = require('path');
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');
var guard = require('express-jwt-permissions');
var bcrypt = require('bcrypt-nodejs');
var bodyParser = require('body-parser');

var secret = 'n8jTwiRYBtJF25Wpk7X1fRvtxDrKs8P5lXP16DqytRwa0Pfa6omupI5YWgGjF3kUeP4F08LeklnwCQGoDMouLZcija8aRZaMEBQdrDSjRp9OGnVrfrZqosHE';

//load daos
var utilisateurs = require('./dao/utilisateurs');
var offres = require('./dao/offres');
var tags = require('./dao/tags');
var rangs = require('./dao/rangs');
var customers = require('./dao/customers');
var authorize = require('./service/authorize');


var app = express();

var connection = require('express-myconnection');
var mysql = require('mysql');

// all environments
app.set('port', process.env.PORT || 4300);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/me', expressJwt({secret: secret}));
app.use('/api', expressJwt({secret: secret}));

app.use(express.static(__dirname + '/app'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));


// development only
//app.use(express.errorHandler());

/*------------------------------------------
 connection peer, register as middleware
 type koneksi : single,pool and request
 -------------------------------------------*/

app.use(
    connection(mysql, {

        host: 'localhost',
        user: 'root',
        password: 'root',
        port: 3306, //port mysql
        database: 'mydb'

    }, 'pool') //or single

);

app.use(function (err, req, res, next) {
    if (err.constructor.name === 'UnauthorizedError') {
        res.status(401).send('Unauthorized');
    }
});

app.get('/checkpass/:pass', function (req, res) {
    bcrypt.hash(req.params.pass, bcrypt.genSaltSync(8), null, function (err, hash) {
        res.send(hash);
    });
});

app.post('/auth', authorize.authorize);

app.get('/', dao.index);
app.get('/utilisateurs', utilisateurs.selectAll);
app.get('/OffresUtilisateur/:id', utilisateurs.selectOffresFromUtilisateur);
app.post('/utilisateur/add', utilisateurs.insertUtilisateur);
app.post('/utilisateur/update/:id', utilisateurs.updateUtilisateur);
app.get('/utilisateur/delete/:id', utilisateurs.deleteUtilisateur);
app.get('/utilisateur/:id', utilisateurs.selectByIdUtilisateur);
app.get('/offres', offres.selectAll);
app.get('/UtilisateursOffre/:id', offres.selectUtilisateursFromOffre);
app.post('/Offre/add', offres.insertOffre);
app.post('/Offre/update/:id', offres.updateOffre);
app.get('/Offre/delete/:id', offres.deleteOffre);
app.get('/Offre/:id', offres.selectByIdOffre);
app.get('/tags', tags.selectAll);
app.get('/OffresTag/:id', tags.selectOffresFromTag);
app.post('/Tag/add', tags.insertTag);
app.post('/Tag/update/:id', tags.updateTag);
app.get('/Tag/delete/:id', tags.deleteTag);
app.get('/Tag/:id', tags.selectByIdTag);
app.get('/rangs', rangs.selectAll);
app.get('/UtilisateursRang/:id', rangs.selectUtilisateursFromRang);
app.post('/Rang/add', rangs.insertRang);
app.post('/Rang/update/:id', rangs.updateRang);
app.get('/Rang/delete/:id', rangs.deleteRang);
app.get('/Rang/:id', rangs.selectByIdRang);
app.get('/customers', customers.list);
app.get('/customers/add', customers.add);
app.post('/customers/add', customers.save);
app.get('/customers/delete/:id', customers.delete_customer);
app.get('/customers/edit/:id', customers.edit);
app.post('/customers/edit/:id', customers.save_edit);

app.get('/me', function (req, res) {
    res.json({
        id: req.user.id,
        nom: req.user.nom,
        prenom: req.user.prenom,
        email: req.user.email,
        hash: req.user.hash,
        role: req.user.role
    });
});

app.use(app.router);

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
