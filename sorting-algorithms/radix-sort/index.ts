namespace RadixSort {
	function radixSort(arr: number[]): number[] {
		const getMax = (arr: number[]): number => {
			let max = arr[0];
			for (let i = 1; i < arr.length; i++) {
				if (arr[i] > max) {
					max = arr[i];
				}
			}
			return max;
		};

		const countingSort = (arr: number[], exp: number): number[] => {
			const n = arr.length;
			const output = new Array(n).fill(0);
			const count = new Array(10).fill(0);

			// Count occurrences of each digit at the current place (exp)
			for (let i = 0; i < n; i++) {
				count[Math.floor(arr[i] / exp) % 10]++;
			}

			// Modify count array to store actual position of this digit in output
			for (let i = 1; i < 10; i++) {
				count[i] += count[i - 1];
			}

			// Build the output array using the count array
			for (let i = n - 1; i >= 0; i--) {
				const index = Math.floor(arr[i] / exp) % 10;
				output[count[index] - 1] = arr[i];
				count[index]--;
			}

			return output;
		};

		const max = getMax(arr);

		// Perform counting sort for every digit place (1, 10, 100, ...)
		for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
			arr = countingSort(arr, exp);
		}

		return arr;
	}

	// Example usage
	const unsortedArray = [170, 45, 75, 90, 802, 24, 2, 66];
	const sortedArray = radixSort(unsortedArray.slice()); // Create a copy to keep the original array unchanged

	console.log('Original Array:', unsortedArray);
	console.log('Sorted Array:', sortedArray);
}
