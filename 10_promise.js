
/**
 * Créez une fonction asynchrone qui attend 2 seconde
 * 
 * utilisez new Promise
 */

const sleep = () => new Promise(x => setTimeout(x,2000));

(async () => {
    console.log("Début");
    await sleep();
    console.log("Après 2 secondes");
})();

module.exports = {sleep};