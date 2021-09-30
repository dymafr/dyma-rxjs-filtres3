screenLog.init(); // affiche le log de la console
// Cliquez sur la flèche de rafraichissement dans la fenêtre de droite, juste à gauche de l'url pour relancer.

import { fromEvent, timer } from 'rxjs';
import { debounceTime, mapTo } from 'rxjs/operators';

const clics = fromEvent(document, 'click').pipe(mapTo('Clic !'));
const debouncedClics = clics.pipe(debounceTime(1000));
const subscribe = debouncedClics.subscribe(val => console.log(`Clic`));

// Instructions :
// 1° Cliquez sur la flèche de rafraichissement dans la fenêtre de droite
// 2° Cliquez plein de fois rapidement
// 3° Seul le dernier clic s'affiche ;)
// 4° Essayez de cliquer toutes les 2 secondes => tous vos clics s'affichent
// Vous pouvez contrôller la fréquence d'émission des valeurs
