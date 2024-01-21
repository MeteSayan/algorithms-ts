# Meta Binary Search | One-Sided Binary Search

The Meta Binary Search, also known as One-Sided Binary Search, is an optimization of the traditional binary search algorithm. It is designed to work efficiently with certain conditions, such as a monotonic (increasing or decreasing) order of elements in the array.

## How Meta Binary Search | One-Sided Binary Search Works

### 1- Initialization

The algorithm initializes two pointers, `low` and `high`, to represent the current search range. Initially, `low` is set to the beginning of the array (index 0), and `high` is set to the end of the array (index `arr.length - 1`).

### 2- Binary Search Iteration

- In each iteration, the algorithm calculates the middle index, `mid`, of the current search range using the formula `mid = Math.floor((low + high) / 2)`.
- It compares the element at index `mid` with the target element.
  - If the element at `mid` is equal to the target, the search is successful, and the index `mid` is returned.
  - If the element at `mid` is less than the target, the algorithm adjusts the search range to the right by updating `low = mid + 1`.
  - If the element at `mid` is greater than the target, the algorithm adjusts the search range to the left by updating `high = mid - 1`.

### 3- Iteration Continuation

- The process continues until the search range is empty (`low > high`). If the target element is not found during this process, the algorithm returns -1.

### 4- Optimization

- The key optimization in Meta Binary Search is the dynamic adjustment of the search range based on the characteristics of the array. For example:
  - If the array is in increasing order, the search range is adjusted to the right when the element at `mid` is less than the target.
  - If the array is in decreasing order, the search range is adjusted to the left when the element at `mid` is greater than the target.

### 5- Termination

- The algorithm terminates either when the target element is found, or when the search range becomes empty.

## Time Complexity

- Worst Case Time Complexity: O(log n)
- Average Case Time Complexity: O(log n)
- Best Case Time Complexity: O(1)
- Auxiliary Space Complexity: O(1)
