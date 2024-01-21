namespace BinarySearch {
	function binarySearch(arr: number[], target: number): number {
		let startIndex: number = 0;
		let endIndex: number = arr.length - 1;

		while (startIndex <= endIndex) {
			const mid: number = Math.floor((endIndex + startIndex) / 2);

			if (arr[mid] < target) {
				startIndex = mid + 1;
			} else if (arr[mid] > target) {
				endIndex = mid - 1;
			} else {
				return mid;
			}
		}

		return -1;
	}

	console.log(
		binarySearch([4, 5, 15, 23, 48, 96, 455, 654, 852, 1523, 5648], 654)
	);
}
