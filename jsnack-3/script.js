/**
 *
 *
Crea due tag div con due id diversi:
un div avrà il testo colorato di rosso mentre l'altro di verde.
*
*/

// funzione che verifica se un numero è pari
// se è pari, restituisce true
// altrimenti restituisce false
function isEven (number) {
	if ( number % 2 === 0 ) {
		return true;
	}
	return false;
}

outputElement = document.getElementById('output');

const newDivRed = document.createElement('div');
newDivRed.id = 'red';
newDivRed.classList.add('text-danger');

const newDivGreen = document.createElement('div');
newDivGreen.id = 'green';
newDivGreen.classList.add('text-success');

outputElement.append(newDivGreen, newDivRed);

// Partendo da un array di numeri, creo una funzione che controlla se siano pari o dispari.


const numbersList = [1, 5, 6, 510, 23, 26, 652, 25];
console.log(numbersList);

// Se sono pari li stampo nell'div "rosso",
// se sono dispari li stampo nell'div "verde".

for ( let i = 0; i < numbersList.length ; i++) {
	if ( isEven(numbersList[i]) ) {
		newDivRed.innerHTML += `${numbersList[i]} - ` ;
	} else {
		newDivGreen.innerHTML += ` - ${numbersList[i]}`;
	}
}


