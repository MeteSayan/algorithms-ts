namespace InsertionSort {
	function insertionSort(arr: number[]): number[] {
		for (let x = 1; x < arr.length; x++) {
			let currentValue = arr[x];
			let y: number;

			for (y = x - 1; y >= 0 && arr[y] > currentValue; y--) {
				arr[y + 1] = arr[y];
			}

			arr[y + 1] = currentValue;
		}
		return arr;
	}

	console.log(insertionSort([4, 10, 5, 3, 25, 166, 54, 345, 756, 987, 77, 77]));
}
