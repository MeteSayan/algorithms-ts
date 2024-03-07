namespace CycleSort {
	function cycleSort(arr: number[]): number[] {
		const n = arr.length;

		for (let cycleStart = 0; cycleStart < n - 1; cycleStart++) {
			let item = arr[cycleStart];
			let pos = cycleStart;

			// Find position where we put the current item
			for (let i = cycleStart + 1; i < n; i++) {
				if (arr[i] < item) {
					pos++;
				}
			}

			// If the item is already in the correct position
			if (pos === cycleStart) {
				continue;
			}

			// Skip duplicate elements
			while (item === arr[pos]) {
				pos++;
			}

			// Swap the elements
			if (pos !== cycleStart) {
				[item, arr[pos]] = [arr[pos], item];
			}

			// Rotate the rest of the cycle
			while (pos !== cycleStart) {
				pos = cycleStart;

				// Find position where we put the current item
				for (let i = cycleStart + 1; i < n; i++) {
					if (arr[i] < item) {
						pos++;
					}
				}

				// Skip duplicate elements
				while (item === arr[pos]) {
					pos++;
				}

				// Swap the elements
				if (item !== arr[pos]) {
					[item, arr[pos]] = [arr[pos], item];
				}
			}
		}

		return arr;
	}

	// Example usage
	const unsortedArray = [5, 2, 7, 1, 3, 5, 2, 7];
	const sortedArray = cycleSort([...unsortedArray]); // Create a copy to keep the original array unchanged

	console.log('Original Array:', unsortedArray);
	console.log('Sorted Array:', sortedArray);
}
