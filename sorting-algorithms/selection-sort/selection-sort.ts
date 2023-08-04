function selectionSort(arr: number[]): number[] {
    for (let x = 0; x < arr.length; x++) {
        let min = x;

        for (let y = x + 1; y < arr.length; y++) {
            if (arr[y] < arr[min]) min = y;
        }

        const temp = arr[min];
        arr[min] = arr[x];
        arr[x] = temp;
    }
    return arr;
}

console.log(selectionSort([4, 10, 5, 3, 25, 166, 54, 345, 756, 987, 77, 77]));
