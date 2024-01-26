namespace CountingSort {
	function countingSort(arr: number[]): number[] {
		// Find the maximum value in the array to determine the range
		const max = Math.max(...arr);

		// Initialize an array to count the occurrences of each element
		const count = Array(max + 1).fill(0);

		// Count the occurrences of each element in the input array
		for (const num of arr) {
			count[num]++;
		}

		// Reconstruct the sorted array using the count array
		let index = 0;
		for (let i = 0; i <= max; i++) {
			while (count[i] > 0) {
				arr[index] = i;
				index++;
				count[i]--;
			}
		}

		return arr;
	}

	// Example usage
	const unsortedArray = [4, 2, 8, 3, 1, 7, 5];
	const sortedArray = countingSort(unsortedArray.slice()); // Create a copy to keep the original array unchanged

	console.log('Original Array:', unsortedArray);
	console.log('Sorted Array:', sortedArray);
}
