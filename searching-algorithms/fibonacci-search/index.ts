//! Don't forget! Fibonacci Search is only worth using if the array is sorted.
namespace FibonacciSearch {
	function fibonacciSearch(arr: number[], target: number): number {
		const n = arr.length;
		let fibM2 = 0; // (m-2)'th Fibonacci number
		let fibM1 = 1; // (m-1)'th Fibonacci number
		let fib = fibM2 + fibM1; // m'th Fibonacci number

		// Find the smallest Fibonacci number greater than or equal to n
		while (fib < n) {
			fibM2 = fibM1;
			fibM1 = fib;
			fib = fibM1 + fibM2;
		}

		let offset = -1; // Offset to start the comparison from

		while (fib > 1) {
			// Check if fibM2 is a valid index
			const i = Math.min(offset + fibM2, n - 1);

			// If the target is greater than the value at index i, reduce Fibonacci sequence by two places
			if (arr[i] < target) {
				fib = fibM1;
				fibM1 = fibM2;
				fibM2 = fib - fibM1;
				offset = i;
			}
			// If the target is less than the value at index i, reduce Fibonacci sequence by one place
			else if (arr[i] > target) {
				fib = fibM2;
				fibM1 -= fibM2;
				fibM2 = fib - fibM1;
			}
			// If the target is found, return the index
			else {
				return i;
			}
		}

		// Check for the last element
		if (fibM1 === 1 && arr[offset + 1] === target) {
			return offset + 1;
		}

		// If the element is not found, return -1
		return -1;
	}

	// Example usage
	const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	const targetElement = 6;
	const result = fibonacciSearch(sortedArray, targetElement);

	if (result !== -1) {
		console.log(`Element ${targetElement} found at index ${result}.`);
	} else {
		console.log(`Element ${targetElement} not found in the array.`);
	}
}
