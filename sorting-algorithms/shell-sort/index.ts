namespace ShellSort {
	function shellSort(arr: number[]): number[] {
		const n = arr.length;

		// Start with a large gap and reduce the gap until it becomes 1
		for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
			// Perform insertion sort for elements at the current gap
			for (let i = gap; i < n; i++) {
				const temp = arr[i];
				let j = i;

				// Shift elements that are greater than temp to the right
				while (j >= gap && arr[j - gap] > temp) {
					arr[j] = arr[j - gap];
					j -= gap;
				}

				// Place temp in its correct position
				arr[j] = temp;
			}
		}

		return arr;
	}

	// Example usage
	const unsortedArray = [64, 25, 12, 22, 11];
	const sortedArray = shellSort([...unsortedArray]); // Create a copy to keep the original array unchanged

	console.log('Original Array:', unsortedArray);
	console.log('Sorted Array:', sortedArray);
}
