	// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array.
	// Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 200.
	// BONUS :
	// - crea due liste, entrambe devono arrivare almeno a 200 
	// - in una ci metti i numeri inseriti pari e nell'altra i dispari

const userNumbers = [];
let userNumber = 0;

const evenNumbers = [];
const oddNumbers = [];

let sum = 0;

while (sum < 200){
	userNumber = parseInt(prompt('Inserisci un numero'));
	userNumbers.push(userNumber);
	sum += userNumber;

	if ( userNumber % 2 == 0 ) {
		evenNumbers.push(userNumber);
	} else if ( userNumber % 2 !== 0 ) {
		oddNumbers.push(userNumber);
	}
}

console.log(userNumbers+ ' : numeri inseriti dall\'utente');
console.log(sum + ' : somma');
console.log(evenNumbers + ' : numeri pari');
console.log(oddNumbers + ' : numeri dispari');