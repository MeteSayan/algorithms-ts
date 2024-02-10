namespace PigeonholeSort {
	function pigeonholeSort(arr: number[]): number[] {
		const min = Math.min(...arr);
		const max = Math.max(...arr);
		const range = max - min + 1;
		const holes = new Array(range).fill(0);

		// Distribute elements into pigeonholes
		for (let i = 0; i < arr.length; i++) {
			holes[arr[i] - min]++;
		}

		// Copy the elements back to the original array
		let index = 0;
		for (let i = 0; i < range; i++) {
			while (holes[i] > 0) {
				arr[index++] = i + min;
				holes[i]--;
			}
		}

		return arr;
	}

	// Example usage
	const unsortedArray = [8, 3, 2, 7, 4, 6, 8];
	const sortedArray = pigeonholeSort([...unsortedArray]); // Create a copy to keep the original array unchanged

	console.log('Original Array:', unsortedArray);
	console.log('Sorted Array:', sortedArray);
}
