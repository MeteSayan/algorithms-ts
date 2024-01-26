namespace HeapSort {
	function heapSort(arr: number[]): number[] {
		const n = arr.length;

		// Build max heap
		for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
			heapify(arr, n, i);
		}

		// Extract elements from the heap one by one
		for (let i = n - 1; i > 0; i--) {
			// Swap the root (maximum element) with the last element
			const temp = arr[0];
			arr[0] = arr[i];
			arr[i] = temp;

			// Heapify the reduced heap
			heapify(arr, i, 0);
		}

		return arr;
	}

	function heapify(arr: number[], n: number, rootIndex: number): void {
		let largest = rootIndex;
		const leftChildIndex = 2 * rootIndex + 1;
		const rightChildIndex = 2 * rootIndex + 2;

		// Compare with left child
		if (leftChildIndex < n && arr[leftChildIndex] > arr[largest]) {
			largest = leftChildIndex;
		}

		// Compare with right child
		if (rightChildIndex < n && arr[rightChildIndex] > arr[largest]) {
			largest = rightChildIndex;
		}

		// If the largest element is not the root, swap and heapify the affected subtree
		if (largest !== rootIndex) {
			const temp = arr[rootIndex];
			arr[rootIndex] = arr[largest];
			arr[largest] = temp;

			heapify(arr, n, largest);
		}
	}

	// Example usage
	const unsortedArray = [12, 11, 13, 5, 6, 7];
	const sortedArray = heapSort(unsortedArray.slice()); // Create a copy to keep the original array unchanged

	console.log('Original Array:', unsortedArray);
	console.log('Sorted Array:', sortedArray);
}
