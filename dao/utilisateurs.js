/*
 * GET users listing.
 */

exports.selectAll = function (req, res) {

    req.getConnection(function (err, connection) {

        if (err)
            console.log("Error Selecting : %s ", err);

        var query = connection.query('SELECT * FROM utilisateur', function (err, rows) {
            res.json(rows);
        });

        //console.log(query.sql);
    });

};

exports.selectOffresFromUtilisateur = function (req, res) {

    var id = req.params.id;

    console.log(connection);

    req.getConnection(function (err, connection) {

        var query = connection.query('SELECT u.*, o.* FROM utilisateur u, offre o, utilisateur_has_offre uo WHERE u.idUtilisateur = ? AND o.idOffre = uo.idOffre AND uo.idUtilisateur = u.idUtilisateur;', [id], function (err, rows) {

            if (err)
                console.log("Error Selecting : %s ", err);

            res.json(rows);


        });

        //console.log(query.sql);
    });

};

exports.selectByIdUtilisateur = function (req, res) {

    var id = req.params.id;
    console.log(id);

    req.getConnection(function (err, connection) {


        var query = connection.query("SELECT * FROM utilisateur WHERE idUtilisateur=?", [id], function (err, rows) {

            if (err)
                console.log("Error Selecting : %s ", err);

            res.json(rows);


        });

        //console.log(query.sql);
    });

};

exports.insertUtilisateur = function (req, res) {

    var input = JSON.parse(JSON.stringify(req.query));
    console.log(input);

    app.bcrypt.hash(req.body.password, bcrypt.genSaltSync(8), null, function (err, hash) {

        // valider et securiser les infos reçues

        /*db.none("insert into utilisateur(nom, prenom, email, hash, role) values(${nom}, ${prenom}, ${email}, ${hash}, ${role})", utilisateur)

         .then(function (data) {
         res.send('ok');
         })
         .catch(function (error) {
         res.send(error);
         });
         */

        req.getConnection(function (err, connection) {

            var data = {

                nom: input.nom,
                prenom: input.prenom,
                voie: input.voie,
                code_postal: input.code_postal,
                ville: input.ville,
                telephone_fixe: input.telephone_fixe,
                telephone_portable: input.telephone_portable,
                mail: input.mail,
                curriculum_vitae: null,
                lettre_de_motivation: null,
                password: input.password,

            };

            // on fait en sorte d'avoir 1 objet à passer pour utiliser les named parameters plutôt que $1 et array      
            data.hash = hash;
            data.idrang = req.body.role.id;

            var query = connection.query("INSERT INTO utilisateur set ? ", data, function (err, rows) {

                if (err)
                    console.log("Error Selecting : %s ", err);

                res.redirect('/utilisateurs');

            });

        });

    });

};

exports.updateUtilisateur = function (req, res) {

    var input = JSON.parse(JSON.stringify(req.query));
    var id = req.params.id;

    req.getConnection(function (err, connection) {

        var data = {

            nom: input.nom,
            prenom: input.prenom,
            voie: input.voie,
            code_postal: input.code_postal,
            ville: input.ville,
            telephone_fixe: input.telephone_fixe,
            telephone_portable: input.telephone_portable,
            mail: input.mail,
            curriculum_vitae: null,
            lettre_de_motivation: null,
            password: input.password,
            idrang: input.idrang

        };

        var query = connection.query("UPDATE utilisateur set ? WHERE idUtilisateur = ? ", [data, id], function (err, rows) {

            if (err)
                console.log("Error Selecting : %s ", err);

            res.redirect('/utilisateurs');


        });

        //console.log(query.sql);
    });

};


exports.deleteUtilisateur = function (req, res) {

    var id = req.params.id;

    req.getConnection(function (err, connection) {

        var query = connection.query("DELETE FROM utilisateur  WHERE idUtilisateur = ? ", [id], function (err, rows) {

            if (err)
                console.log("Error Selecting : %s ", err);

            res.redirect('/utitisateurs');

        });

        //console.log(query.sql);
    });

};
