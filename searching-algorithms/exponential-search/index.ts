//! Don't forget! Exponential Search is only worth using if the array is sorted.
namespace ExponentialSearch {
	function binarySearch(
		arr: number[],
		target: number,
		low: number,
		high: number
	): number {
		while (low <= high) {
			const mid = low + Math.floor((high - low) / 2);

			if (arr[mid] === target) {
				return mid; // Element found
			} else if (arr[mid] < target) {
				low = mid + 1; // Adjust the search range to the right
			} else {
				high = mid - 1; // Adjust the search range to the left
			}
		}

		return -1; // Element not found
	}

	function exponentialSearch(arr: number[], target: number): number {
		const n = arr.length;

		// If the target is present at the first position
		if (arr[0] === target) {
			return 0;
		}

		// Find the range where the target may be located by doubling an index
		let i = 1;
		while (i < n && arr[i] <= target) {
			i *= 2;
		}

		// Perform binary search within the found range
		return binarySearch(arr, target, Math.floor(i / 2), Math.min(i, n - 1));
	}

	// Example usage
	const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	const targetElement = 6;
	const result = exponentialSearch(sortedArray, targetElement);

	if (result !== -1) {
		console.log(`Element ${targetElement} found at index ${result}.`);
	} else {
		console.log(`Element ${targetElement} not found in the array.`);
	}
}
