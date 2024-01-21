import { sortTwoNumbers } from '../utils';

namespace BubbleSort {
	function bubbleSort(arr: number[]): number[] {
		for (let x = 0; x < arr.length; x++) {
			for (let y = 0; y < arr.length + x - 1; y++) {
				sortTwoNumbers(arr, y + 1, y);
			}
		}
		return arr;
	}

	console.log(bubbleSort([4, 10, 5, 3, 25, 166, 54, 345, 756, 987, 77, 77]));
}
