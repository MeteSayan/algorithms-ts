//! Don't forget! Jump Search is only worth using if the array is sorted.
namespace JumpSearch {
	function jumpSearch(arr: number[], target: number): number {
		const n = arr.length;
		let jumpSize = Math.floor(Math.sqrt(n));

		let prev = 0;

		// Jump through the array in fixed steps
		while (arr[Math.min(jumpSize, n) - 1] < target) {
			prev = jumpSize;
			jumpSize += Math.floor(Math.sqrt(n));

			// If we have reached the end of the array, the target is not present
			if (prev >= n) {
				return -1;
			}
		}

		// Perform linear search in the vicinity of the target element
		for (let i = prev; i < Math.min(jumpSize, n); i++) {
			if (arr[i] === target) {
				return i; // Element found
			}
		}

		return -1; // Element not found
	}

	// Example usage
	const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	const targetElement = 6;
	const result = jumpSearch(sortedArray, targetElement);

	if (result !== -1) {
		console.log(`Element ${targetElement} found at index ${result}.`);
	} else {
		console.log(`Element ${targetElement} not found in the array.`);
	}
}
