//! Don't forget! Meta Binary Search is only worth using if the array is sorted.
namespace MetaBinarySearch {
	function metaBinarySearch(arr: number[], target: number): number {
		let low = 0;
		let high = arr.length - 1;

		while (low <= high) {
			const mid = Math.floor((low + high) / 2);

			if (arr[mid] === target) {
				return mid; // Element found
			} else if (arr[mid] < target) {
				// Adjust the search range based on the characteristics of the array
				// For example, if the array is in increasing order, move the search range to the right
				low = mid + 1;
			} else {
				// If the array is in decreasing order, move the search range to the left
				high = mid - 1;
			}
		}

		return -1; // Element not found
	}

	// Example usage
	const array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
	const targetElement = 13;
	const result = metaBinarySearch(array, targetElement);

	if (result !== -1) {
		console.log(`Element ${targetElement} found at index ${result}.`);
	} else {
		console.log(`Element ${targetElement} not found in the array.`);
	}
}
