function sentinelLinearSearch(arr: number[], target: number): number {
	// Add a sentinel at the end of the array
	const lengthOfArr = arr.length;
	arr.push(target);

	// Perform linear search until the target is found
	let i = 0;
	while (arr[i] !== target) {
		i++;
	}

	// Remove the sentinel before returning the result
	arr.pop();

	// If the index is less than the original array length, the target is found
	return i < lengthOfArr ? i : -1;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const targetElement = 6;
const result = sentinelLinearSearch(array, targetElement);

if (result !== -1) {
	console.log(`Target ${targetElement} found at index ${result}.`);
} else {
	console.log(`Target ${targetElement} not found in the array.`);
}
