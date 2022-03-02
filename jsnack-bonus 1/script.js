/* § BONUS 1
	Fai inserire due numeri, che chiameremo N & M, all'utente.
	Genera N array, ognuno formato da M numeri casuali tra 4 e 4532.
	Ogni volta che ne crei uno, stampalo a schermo. */

let  userFirstNumber = parseInt(prompt('Inserisci un numero'));
let  userSecondNumber = parseInt(prompt('Inserisci un altro numero'));

while ( isNaN(userFirstNumber) || isNaN(userSecondNumber)){
	userFirstNumber = parseInt(prompt('Inserisci un numero'));
	userSecondNumber = parseInt(prompt('Inserisci un altro numero'));
}

if( userFirstNumber >= 500){
		userFirstNumber = 500;
	}

if( userSecondNumber >= 100){
	userSecondNumber = 100;
}

for ( let i = 0; i < userFirstNumber; i++) { // Genera N array
	const nArray = [];
		for ( let j = 0; j < userSecondNumber; j++) {  // ognuno formato da M numeri casuali tra 4 e 4532.
			nArray.push(Math.floor((Math.random() * 4528) + 4 ));
		}
	console.log(nArray); // Ogni volta che ne crei uno, stampalo a schermo.
}