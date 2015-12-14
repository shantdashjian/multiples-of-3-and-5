var total = 0;
for (var number = 1; number < 1000; number++) {
	if (number % 3 === 0 || number % 5 === 0) {
		total = total + number;
	}
};

console.log("The total = " + total);