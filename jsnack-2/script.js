/**
Fai inserire un numero, che chiameremo N, all'utente.
Genera N array, ognuno formato da 10 numeri casuali tra 4 e 4532.
Ogni volta che ne crei uno, stampalo a schermo.
*/

const userNumber = parseInt(prompt('Inserisci un numero'));
while (isNaN(userNumber)){
	userNumber = parseInt(prompt('Inserisci un numero'));
}

if( userNumber >= 500){
	userNumber = 500;
}


for ( let i = 0; i < userNumber ; i++) {
	const nArray = [];
	while ( nArray.length < 10) {
		nArray.push(Math.floor((Math.random() * 4528) + 4 ));
	}
	console.log(nArray);
}