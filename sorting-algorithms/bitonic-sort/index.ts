namespace BitonicSort {
	function compareAndSwap(
		arr: number[],
		i: number,
		j: number,
		direction: boolean
	): void {
		if ((arr[i] > arr[j] && direction) || (arr[i] < arr[j] && !direction)) {
			[arr[i], arr[j]] = [arr[j], arr[i]];
		}
	}

	function bitonicMerge(
		arr: number[],
		low: number,
		count: number,
		direction: boolean
	): void {
		if (count > 1) {
			const k = count / 2;
			for (let i = low; i < low + k; i++) {
				compareAndSwap(arr, i, i + k, direction);
			}
			bitonicMerge(arr, low, k, direction);
			bitonicMerge(arr, low + k, k, direction);
		}
	}

	function bitonicSort(
		arr: number[],
		low: number,
		count: number,
		direction: boolean
	): void {
		if (count > 1) {
			const k = count / 2;
			bitonicSort(arr, low, k, true);
			bitonicSort(arr, low + k, k, false);
			bitonicMerge(arr, low, count, direction);
		}
	}

	function sortBitonic(arr: number[]): number[] {
		const n = arr.length;
		let direction = true; // true for ascending, false for descending

		bitonicSort(arr, 0, n, direction);

		return arr;
	}

	// Example usage
	const unsortedArray = [8, 3, 6, 2, 7, 1, 5, 4];
	const sortedArray = sortBitonic([...unsortedArray]); // Create a copy to keep the original array unchanged

	console.log('Original Array:', unsortedArray);
	console.log('Sorted Array:', sortedArray);
}
