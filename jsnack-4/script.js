// creo una funzione che controlla se la somma di due numeri x e y sia pari

// funzione che verifica se un numero è pari
// se è pari, restituisce true
// altrimenti restituisce false
function isEven (number) {
	if ( number % 2 === 0 ) {
		return true;
	}
	return false;
}

function isSumEven ( num1, num2) {
	return isEven(num1 + num2);
}

console.log(isSumEven(5551242, 51852));