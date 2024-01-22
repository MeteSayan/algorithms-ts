# Ternary Search

Ternary Search is a searching algorithm that operates on a sorted array and divides the search space into three parts in each iteration. It is similar to binary search but with three partitions instead of two.

## How Ternary Search Works

### 1- Initialization

- Initialize two pointers, `left` and `right`, to represent the current search range. Initially, set `left` to 0 and `right` to `arr.length - 1`.

### 2- Partitioning

- Calculate two midpoints, `mid1` and `mid2`, dividing the search range into three equal parts:
  - `mid1 = left + (right - left) / 3`
  - `mid2 = right - (right - left) / 3`

### 3- Comparison

- Compare the target element with the elements at `mid1` and `mid2`:
  - If the target is equal to `arr[mid1]`, return `mid1` as the index where the element is found.
  - If the target is equal to `arr[mid2]`, return `mid2` as the index where the element is found.
  - If the target is less than `arr[mid1]`, adjust the search range to the left by setting `right = mid1 - 1`.
  - If the target is greater than `arr[mid2]`, adjust the search range to the right by setting `left = mid2 + 1`.
  - If the target is between `arr[mid1]` and `arr[mid2]`, update the search range accordingly `(left = mid1 + 1 and right = mid2 - 1)`.

### 4- Iteration

- Repeat steps 2-3 until the target is found or the search range becomes empty (`left <= right`).

### 5- Termination

- If the target is found during the process, return the index where the element is located.
- If the search range becomes empty and the target is not found, return -1 to indicate that the element is not present in the array.

The key idea of Ternary Search is to reduce the search space by dividing it into three parts in each iteration, making it more efficient than a linear search. However, in practice, Ternary Search is less commonly used compared to binary search because the latter has similar time complexity characteristics and is easier to implement.

## Time Complexity

- Worst Case Time Complexity: O(log3 n)
- Average Case Time Complexity: O(log3 n)
- Best Case Time Complexity: O(1)
- Auxiliary Space Complexity: O(1)

### Worst Case

The worst-case time complexity of Ternary Search is O(log3 n), where n is the size of the array. This occurs when the target element is not present in the array, and the algorithm has to perform the maximum number of iterations to conclude that the element is not there.

### Average Case

The average-case time complexity is also O(log3 n). This average behavior is under the assumption that the target element is equally likely to be in any part of the array. In practice, Ternary Search is not as commonly used as binary search, and the average case might not be as relevant in typical scenarios.

### Best Case

The best-case time complexity is O(1), which occurs when the target element is found in the first comparison. This scenario happens when the target element is at the midpoint of the array.

### Auxiliary Space Complexity

The auxiliary space complexity of Ternary Search is O(1), indicating that the algorithm uses a constant amount of additional space regardless of the size of the input array. The primary operations involve updating pointers and calculating midpoints, which do not require additional space proportional to the input size.
