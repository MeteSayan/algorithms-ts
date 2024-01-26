# Counting Sort

Counting Sort is a non-comparison-based sorting algorithm that works particularly well when the range of input values is known in advance. It follows a simple counting and reconstruction process.

## How Counting Sort Works

### 1- Find the Range

- Determine the range of input values in the array.
- Find the minimum and maximum values to determine the range. Let's call the range `[min, max]`.

### 2- Counting

- Initialize a count array of size `(max - min + 1)` and initialize all elements to zero. This count array is used to store the occurrences of each element in the input array.
- Iterate through the input array, and for each element `arr[i]`, increment the count at the index corresponding to `arr[i] - min`.

### 3- Accumulate Counts

- Update the count array to store cumulative counts. For each index `i`, set `count[i] += count[i - 1]`.
- After this step, `count[i]` represents the number of elements less than or equal to `i + min`.

### 4- Reconstruct the Sorted Array

- Create an output array of the same size as the input array.
- Iterate through the input array in reverse order. For each element `arr[i]`, find its position in the output array using `count[arr[i] - min] - 1`.
- Place the element at the found position in the output array.
- Decrement the count at the index corresponding to `arr[i] - min`.

Counting Sort is efficient when the range of input values is not significantly larger than the number of elements in the array. It is a stable sorting algorithm with a linear time complexity, making it suitable for certain scenarios.

## Time Complexity

- Best Case: O(n + k)
- Average Case: O(n + k)
- Worst Case: O(n + k)
- Space Complexity: O(k)

### Space Complexity

Auxiliary Space: O(k), where k is the range of input values.

### Key Points For Time Complexity

- The time complexity of Counting Sort is linear, making it efficient for scenarios where the range of input values is not significantly larger than the number of elements in the array.
- The algorithm is stable, meaning that equal elements retain their relative order in the sorted output.
- The space complexity is determined by the size of the count array, which is proportional to the range of input values.
- Counting Sort is particularly useful when the range of input values is small and known in advance, making it more efficient than comparison-based algorithms in certain cases.
