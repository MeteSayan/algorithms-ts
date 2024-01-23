//! Don't forget! Interpolation Search is only worth using if the array is sorted.
namespace InterpolationSearch {
	function interpolationSearch(arr: number[], target: number): number {
		let low = 0;
		let high = arr.length - 1;

		while (low <= high && target >= arr[low] && target <= arr[high]) {
			// Use interpolation formula to estimate the probable position of the target
			const pos =
				low +
				Math.floor(
					((target - arr[low]) * (high - low)) / (arr[high] - arr[low])
				);

			if (arr[pos] === target) {
				return pos; // Element found at estimated position
			}

			if (arr[pos] < target) {
				low = pos + 1; // Adjust the search range to the right
			} else {
				high = pos - 1; // Adjust the search range to the left
			}
		}

		return -1; // Element not found
	}

	// Example usage
	const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	const targetElement = 6;
	const result = interpolationSearch(sortedArray, targetElement);

	if (result !== -1) {
		console.log(`Element ${targetElement} found at index ${result}.`);
	} else {
		console.log(`Element ${targetElement} not found in the array.`);
	}
}
