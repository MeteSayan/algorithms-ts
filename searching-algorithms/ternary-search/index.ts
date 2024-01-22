//! Don't forget! Ternary Search is only worth using if the array is sorted.
namespace TernarySearch {
	function ternarySearch(arr: number[], target: number): number {
		let left = 0;
		let right = arr.length - 1;

		while (left <= right) {
			const partitionSize = Math.floor((right - left) / 3);
			const mid1 = left + partitionSize;
			const mid2 = right - partitionSize;

			if (arr[mid1] === target) {
				return mid1; // Element found at mid1
			} else if (arr[mid2] === target) {
				return mid2; // Element found at mid2
			} else if (target < arr[mid1]) {
				right = mid1 - 1; // Adjust the search range to the left
			} else if (target > arr[mid2]) {
				left = mid2 + 1; // Adjust the search range to the right
			} else {
				// Target is in the middle partition, update search ranges accordingly
				left = mid1 + 1;
				right = mid2 - 1;
			}
		}

		return -1; // Element not found
	}

	// Example usage
	const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	const targetElement = 6;
	const result = ternarySearch(sortedArray, targetElement);

	if (result !== -1) {
		console.log(`Element ${targetElement} found at index ${result}.`);
	} else {
		console.log(`Element ${targetElement} not found in the array.`);
	}
}
