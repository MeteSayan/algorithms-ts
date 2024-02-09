namespace CombSort {
	function getNextGap(gap: number): number {
		gap = Math.floor((gap * 10) / 13); // Shrink factor
		if (gap < 1) {
			return 1; // Minimum gap is 1
		}
		return gap;
	}

	function combSort(arr: number[]): number[] {
		const n = arr.length;
		let gap = n; // Initialize gap
		let swapped = true;

		while (gap !== 1 || swapped) {
			gap = getNextGap(gap); // Update gap

			// Initialize swapped as false to check if any swap happened
			swapped = false;

			// Compare all elements with current gap
			for (let i = 0; i < n - gap; i++) {
				if (arr[i] > arr[i + gap]) {
					// Swap arr[i] and arr[i+gap]
					[arr[i], arr[i + gap]] = [arr[i + gap], arr[i]];
					swapped = true;
				}
			}
		}
		return arr;
	}

	// Example usage
	const unsortedArray = [8, 4, 1, 6, 2, 9, 5];
	const sortedArray = combSort([...unsortedArray]); // Create a copy to keep the original array unchanged

	console.log('Original Array:', unsortedArray);
	console.log('Sorted Array:', sortedArray);
}
