namespace QuickSort {
	function quickSort(arr: number[]): number[] {
		if (arr.length <= 1) {
			return arr; // Array is already sorted
		}

		const pivotIndex = Math.floor(arr.length / 2);
		const pivot = arr[pivotIndex];

		const left = [];
		const right = [];

		for (let i = 0; i < arr.length; i++) {
			if (i === pivotIndex) {
				continue; // Skip the pivot element
			}

			if (arr[i] < pivot) {
				left.push(arr[i]);
			} else {
				right.push(arr[i]);
			}
		}

		return [...quickSort(left), pivot, ...quickSort(right)];
	}

	// Example usage
	const unsortedArray = [4, 2, 7, 1, 9, 3, 6, 5, 8];
	const sortedArray = quickSort(unsortedArray);
	console.log('Sorted Array:', sortedArray);
}
