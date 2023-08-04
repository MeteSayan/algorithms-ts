function linearSearch(arr: number[], target: number): number {
    for (let x = 0; x < arr.length; x++) {
        if (arr[x] === target) return x;
    }

    return -1;
}

console.log(linearSearch([4, 10, 5, 3, 25, 166, 54, 345, 756, 987, 77], 54));
