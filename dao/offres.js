/*
 * GET users listing.
 */

exports.selectAll = function (req, res) {

    req.getConnection(function (err, connection) {

        var query = connection.query('SELECT * FROM offre', function (err, rows) {

            if (err)
                console.log("Error Selecting : %s ", err);

            res.json(rows);


        });

        //console.log(query.sql);
    });

};


exports.selectUtilisateursFromOffre = function (req, res) {

    var id = req.params.id;

    req.getConnection(function (err, connection) {

        var query = connection.query('SELECT u.*, o.* FROM utilisateur u, offre o, utilisateur_has_offre uo WHERE o.idOffre = ? AND o.idOffre = uo.idOffre AND uo.idUtilisateur = u.idUtilisateur;', [id], function (err, rows) {

            if (err)
                console.log("Error Selecting : %s ", err);

            res.json(rows);


        });

        //console.log(query.sql);
    });

};


exports.selectByIdOffre = function (req, res) {

    var id = req.params.id;
    console.log(id);

    req.getConnection(function (err, connection) {


        var query = connection.query("SELECT * FROM offre WHERE idOffre=?", [id], function (err, rows) {

            if (err)
                console.log("Error Selecting : %s ", err);

            res.json(rows);


        });

        //console.log(query.sql);
    });

};

exports.insertOffre = function (req, res) {

    var input = JSON.parse(JSON.stringify(req.query));
    console.log(input);

    req.getConnection(function (err, connection) {

        var data = {


            titre: input.titre,
            description: input.description,
            active: input.active
        };


        var query = connection.query("INSERT INTO offre set ? ", data, function (err, rows) {

            if (err)
                console.log("Error Selecting : %s ", err);

            res.redirect('/offres');


        });

        //console.log(query.sql);
    });

};

exports.updateOffre = function (req, res) {

    var input = JSON.parse(JSON.stringify(req.query));
    var id = req.params.id;

    req.getConnection(function (err, connection) {

        var data = {

            titre: input.titre,
            description: input.description,
            active: input.active

        };

        var query = connection.query("UPDATE offre set ? WHERE idOffre = ? ", [data, id], function (err, rows) {

            if (err)
                console.log("Error Selecting : %s ", err);

            res.redirect('/offres');


        });

        //console.log(query.sql);
    });

};


exports.deleteOffre = function (req, res) {

    var id = req.params.id;

    req.getConnection(function (err, connection) {

        var query = connection.query("DELETE FROM offre  WHERE idOffre= ? ", [id], function (err, rows) {

            if (err)
                console.log("Error Selecting : %s ", err)

            res.redirect('/offres');

        });

        //console.log(query.sql);
    });

};
