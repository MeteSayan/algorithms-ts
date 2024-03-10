namespace CocktailSort {
	function cocktailSort(arr: number[]): number[] {
		const n = arr.length;
		let swapped = true;
		let start = 0;
		let end = n - 1;

		while (swapped) {
			// Reset the swapped flag
			swapped = false;

			// Bubble sort from left to right
			for (let i = start; i < end; i++) {
				if (arr[i] > arr[i + 1]) {
					[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
					swapped = true;
				}
			}
			// If no swap occurred, the array is already sorted
			if (!swapped) {
				break;
			}
			// Update the end index
			end--;

			// Bubble sort from right to left
			for (let i = end; i > start; i--) {
				if (arr[i] < arr[i - 1]) {
					[arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
					swapped = true;
				}
			}
			// Update the start index
			start++;
		}

		return arr;
	}

	// Example usage
	const unsortedArray = [8, 3, 6, 2, 7, 1, 5, 4];
	const sortedArray = cocktailSort([...unsortedArray]); // Create a copy to keep the original array unchanged

	console.log('Original Array:', unsortedArray);
	console.log('Sorted Array:', sortedArray);
}
