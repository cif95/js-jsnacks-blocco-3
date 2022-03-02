/* # BONUS 2
	Fai inserire tre numeri, che chiameremo N & M & L, all'utente.
	Genera N array, ognuno formato da M numeri casuali tra 4 e 4532 che sommati diano almeno L.
	Ogni volta che ne crei uno, stampalo a schermo.*/

let  userFirstNumber = parseInt(prompt('Inserisci un numero'));
let  userSecondNumber = parseInt(prompt('Inserisci un secondo numero'));
let  userThirdNumber = parseInt(prompt('Inserisci un terzo numero'));

console.log(
`${userFirstNumber}   ==  N ;
${userSecondNumber}   ==  M ;
${userThirdNumber}   ==  L ;`
);


while ( isNaN(userFirstNumber) || isNaN(userSecondNumber) || isNaN(userThirdNumber)){
	userFirstNumber = parseInt(prompt('Inserisci un numero'));
	userSecondNumber = parseInt(prompt('Inserisci un altro numero'));
	userThirdNumber = parseInt(prompt('Inserisci un terzo numero'));
	}


if( (userFirstNumber >= 100) || (userSecondNumber >= 100) || (userThirdNumber >= 10000) ){
	userFirstNumber = 100;
	userSecondNumber = 100;
	userThirdNumber = 10000;
}

let sum = 0;
const arrayList = [];

for ( let i = 0; i < userFirstNumber; i++) {  // Genera N array
const nArray = [];
	let j = 0;
	sum = 0;
	while ( j < userSecondNumber ) { // ! ognuno formato da M numeri casuali tra 4 e 4532, che sommati  diano almeno L 
		nArray.push(Math.floor((Math.random() * 4528) + 4 ));
		sum += nArray[j]; // ? somma degli elementi di ogni array
		j++
	};

// for ( let k = 0; k < userThirdNumber; k++){ 
// 	
// }
arrayList.push(nArray);
console.log(nArray); // Ogni volta che ne crei uno, stampalo a schermo.
console.log(`${sum} questa è la somma degli elementi di questo array : ${nArray}`);		
}

console.log(arrayList);