//! Swaps 2 numbers in the list
function swapTwoNumbers(list: number[], x: number, y: number) {
    [list[x], list[y]] = [list[y], list[x]];
}

//! If x is less than y swaps 2 numbers in the list
function sortTwoNumbers(list: number[], x: number, y: number) {
    if (list[x] < list[y]) {
        swapTwoNumbers(list, x, y);
    }
}

export { swapTwoNumbers, sortTwoNumbers }