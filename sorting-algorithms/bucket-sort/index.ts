namespace BucketSort {
	function bucketSort(arr: number[]): number[] {
		const n = arr.length;

		// Find the maximum and minimum values in the array
		let max = arr[0];
		let min = arr[0];

		for (let i = 1; i < n; i++) {
			if (arr[i] > max) {
				max = arr[i];
			}
			if (arr[i] < min) {
				min = arr[i];
			}
		}

		// Calculate the range of each bucket
		const range = (max - min) / n + 1;

		// Create an array of buckets
		const buckets: number[][] = new Array(n);

		// Initialize each bucket
		for (let i = 0; i < n; i++) {
			buckets[i] = [];
		}

		// Distribute elements into buckets
		for (let i = 0; i < n; i++) {
			const index = Math.floor((arr[i] - min) / range);
			buckets[index].push(arr[i]);
		}

		// Sort each bucket individually
		for (let i = 0; i < n; i++) {
			buckets[i].sort((a, b) => a - b);
		}

		// Concatenate the sorted buckets to obtain the final sorted array
		let result: number[] = [];
		for (let i = 0; i < n; i++) {
			result = result.concat(buckets[i]);
		}

		return result;
	}

	// Example usage
	const unsortedArray = [4, 2, 8, 3, 1, 7, 5];
	const sortedArray = bucketSort(unsortedArray.slice()); // Create a copy to keep the original array unchanged

	console.log('Original Array:', unsortedArray);
	console.log('Sorted Array:', sortedArray);
}
