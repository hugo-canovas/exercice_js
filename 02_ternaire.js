
/**
 * retourne la valeur la plus grande des deux paramètres
 * 
 * Contraintes:
 *    - utiliser l'opérateur ternaire (if interdit)
 */
function ternaire(a , b) {
    return a > b ? a : a < b ? b : "les deux valeurs sont égales";
}

console.log(ternaire(1, 2));

module.exports = ternaire;