// * I tried different solutions but I think this is the best solution for the algorithm to be understood. Thanks to @sjohnsonaz for sharing the Github gist.
// * https://gist.github.com/sjohnsonaz/29e92e5ccbb8513a31609930b46d5faf
namespace MergeSort {
	function mergeSort(arr: number[]): number[] {
		return divide(arr);
	}

	function divide(items: number[]): number[] {
		let halfLength: number = Math.ceil(items.length / 2);
		let low: number[] = items.slice(0, halfLength);
		let high: number[] = items.slice(halfLength);
		if (halfLength > 1) {
			low = divide(low);
			high = divide(high);
		}
		return combine(low, high);
	}

	function combine(low: number[], high: number[]): number[] {
		let indexLow: number = 0;
		let indexHigh: number = 0;
		let lengthLow: number = low.length;
		let lengthHigh: number = high.length;
		let combined: number[] = [];
		while (indexLow < lengthLow || indexHigh < lengthHigh) {
			let lowItem: number = low[indexLow];
			let highItem: number = high[indexHigh];
			if (lowItem !== undefined) {
				if (highItem === undefined) {
					combined.push(lowItem);
					indexLow++;
				} else {
					if (lowItem <= highItem) {
						combined.push(lowItem);
						indexLow++;
					} else {
						combined.push(highItem);
						indexHigh++;
					}
				}
			} else {
				if (highItem !== undefined) {
					combined.push(highItem);
					indexHigh++;
				}
			}
		}
		return combined;
	}

	console.log(mergeSort([4, 10, 5, 3, 25, 166, 54, 345, 756, 987, 77, 77]));
}
