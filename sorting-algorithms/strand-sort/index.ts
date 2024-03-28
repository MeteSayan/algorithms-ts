namespace StrandSort {
	function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
		const mergedArray: number[] = [];
		let i = 0;
		let j = 0;

		while (i < arr1.length && j < arr2.length) {
			if (arr1[i] < arr2[j]) {
				mergedArray.push(arr1[i]);
				i++;
			} else {
				mergedArray.push(arr2[j]);
				j++;
			}
		}

		// Add remaining elements from arr1
		while (i < arr1.length) {
			mergedArray.push(arr1[i]);
			i++;
		}

		// Add remaining elements from arr2
		while (j < arr2.length) {
			mergedArray.push(arr2[j]);
			j++;
		}

		return mergedArray;
	}

	function strandSort(arr: number[]): number[] {
		const sortedStrands: number[][] = [];

		while (arr.length > 0) {
			const subList: number[] = [arr.shift()!]; // Remove and get the first element

			for (let i = 0; i < arr.length; i++) {
				if (arr[i] >= subList[subList.length - 1]) {
					subList.push(arr.splice(i, 1)[0]); // Remove and push the element to subList
					i--; // Adjust index due to element removal
				}
			}

			sortedStrands.push(subList);
		}

		let result: number[] = [];

		while (sortedStrands.length > 1) {
			const merged: number[] = mergeSortedArrays(
				sortedStrands.shift()!,
				sortedStrands.shift()!
			);
			sortedStrands.unshift(merged);
		}

		return sortedStrands[0] || result;
	}

	// Example usage
	const unsortedArray = [5, 2, 7, 1, 3, 5, 2, 7];
	const sortedArray = strandSort([...unsortedArray]); // Create a copy to keep the original array unchanged

	console.log('Original Array:', unsortedArray);
	console.log('Sorted Array:', sortedArray);
}
