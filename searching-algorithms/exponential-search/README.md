# Exponential Search

Exponential Search is a searching algorithm designed for sorted arrays. It combines the principles of binary search and linear search to efficiently locate an element in the array.

## How Exponential Search Works

### 1- Initialization

- Given a sorted array `arr` and a target element `target`, start by checking if the target is present at the first position (`arr[0] === target`). If true, return 0 as the target is found at the first index.

### 2- Doubling the Index

Initialize an index `i` to 1. Proceed to double the value of `i` until `arr[i]` becomes greater than the target or until the end of the array is reached.

### 3- Binary Search

- Perform a binary search in the range from `i / 2` to the minimum of `i` and the last index of the array (`n - 1`), where `n` is the size of the array.
- The binary search is conducted to find the target within the range identified in the previous step.
- If the target is found during the binary search, return the index at which it is located.
- If the target is not found, return -1 to indicate that the target is not present in the array.

### Key Points

- Exponential Search works well when the target is likely to be closer to the beginning of the array.
- By doubling the index (`i`), the algorithm quickly narrows down the search space to a range where the target may be located.
- The binary search step within the identified range efficiently finds the target element.

### Use Cases

- Exponential Search is particularly useful when the size of the array is not known in advance, as it adapts well to varying sizes.
- It is also effective when the target is expected to be close to the beginning of the array.

## Time Complexity

- Worst Case Time Complexity: O(log n)
- Average Case Time Complexity: O(log n)
- Best Case Time Complexity: O(1)
- Auxiliary Space Complexity: O(1)

### Worst Case

The worst-case time complexity of Exponential Search is O(log n), where n is the size of the array. This occurs when the target element is at the end of the array, and the algorithm needs to perform a binary search over a logarithmic-sized range.

### Average Case

The average-case time complexity is also O(log n). Exponential Search involves doubling the index until a suitable range is found, and the subsequent binary search is performed on that range. The binary search step has a logarithmic time complexity.

### Best Case

The best-case time complexity is O(1), which occurs when the target element is found at the first position of the array.

### Auxiliary Space Complexity

The auxiliary space complexity of Exponential Search is O(1), indicating that the algorithm uses a constant amount of additional space regardless of the size of the input array. The primary operations involve updating pointers and calculating the index, which do not require additional space proportional to the input size.
