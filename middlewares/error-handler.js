// Récupère le 404 (route introuvable) et le transmet au gestionnaire d'erreurs via next()
export function notFoundError(req, res, next) {
    const err = new Error("Not Found"); // Créer une erreur pour les routes introuvables
    err.status = 404; // Définir le code de retour à 404
    next(err); // Transmettre l'erreur au middleware suivant
};

/**
 * gestionnaire d'erreurs avec quatre paramètres :
 * Le premier paramètre est supposé être une erreur transmise par
 * le "next" d'un autre middleware
 */
export function errorHandler(err, req, res, next) {
    // Renvoyer à l'utilisateur le code et le message de l'erreur
    res.status(err.status || 500).json({
        message: err.message,
    });
};