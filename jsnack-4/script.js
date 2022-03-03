// creo una funzione che controlla se la somma di due numeri x e y sia pari

/**
 * function the checks is a number is even
 * @param {*} number number to be checked
 * @returns true ( if number is even) ; otherwise false.
 */
function isEven (number) {
	if ( number % 2 === 0 ) {
		return true;
	}
	return false;
}

/**
 * function that checks if the sum between two numbers is even
 * @param {*} num1 first number to be added
 * @param {*} num2 second number to be added
 * @returns true if the sum of the two numbers is even ; otherwise false.
 */
function isSumEven ( num1, num2) {
	return isEven(num1 + num2);
}

console.log(isSumEven(5551242, 51852));