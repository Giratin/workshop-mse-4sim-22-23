import Game from '../models/game.js';

export function getAll(req, res) {
    Game
    .find({})
    // .where('onSale').equals(true) // Si 'OnSale' a la valeur true
    // .where('year').gt(2000).lt(2022) // Si 2000 < 'year' < 2022 
    // .where('name').in(['DMC5', 'RE8', 'NFS']) // Si 'name' a l'une des valeurs du tableau
    // .limit(10) // Récupérer les 10 premiers seulement
    // .sort('-year') // Tri descendant (enlever le '-' pour un tri ascendant)
    // .select('name') // Ne retourner que les attributs mentionnés (séparés par des espace si plusieurs)
    // .exec() // Executer la requête
    .then(docs => {
        res.status(200).json(docs);
    })
    .catch(err => {
        res.status(500).json({ error: err });
    });
}

export function addOnce(req, res) {
    // Invoquer la méthode create directement sur le modèle
    Game
    .create(req.body)
    .then(newGame => {
        res.status(200).json(newGame);
    })
    .catch(err => {
        res.status(500).json({ error: err });
    });
}

export function getOnce(req, res) {
    Game
    .findOne({ "name": req.params.name })
    .then(doc => {
        res.status(200).json(doc);
    })
    .catch(err => {
        res.status(500).json({ error: err });
    });
}

/**
 * Mettre à jour plusieurs documents
 * Remarque : renommez putOnce par putAll
 */
export function putAll(req, res) {
    Game
    .updateMany({}, { "onSale": true })
    .then(doc => {
        res.status(200).json(doc);
    })
    .catch(err => {
        res.status(500).json({ error: err });
    });
}

/**
 * Mettre à jour un seul document
 */
export function patchOnce(req, res) {
    Game
    .findOneAndUpdate({ "name": req.params.name }, { "onSale": false })
    .then(doc => {
        res.status(200).json(doc);
    })
    .catch(err => {
        res.status(500).json({ error: err });
    });
}

/**
 * Supprimer un seul document
 */
export function deleteOnce(req, res) {
    Game
    .findOneAndRemove({ "name": req.params.name })
    .then(doc => {
        res.status(200).json(doc);
    })
    .catch(err => {
        res.status(500).json({ error: err });
    });
}

// /**
//  * Supprimer plusieurs documents
//  */
// export function deleteOnce(req, res) {
//     Game
//     .remove({ "onSale": false })
//     .then(doc => {
//         res.status(200).json(doc);
//     })
//     .catch(err => {
//         res.status(500).json({ error: err });
//     });
// }