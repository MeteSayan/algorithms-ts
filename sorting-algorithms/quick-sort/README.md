# QuickSort

QuickSort is a sorting algorithm that follows the divide-and-conquer strategy to efficiently sort an array. The basic idea behind QuickSort is to select a pivot element from the array, partition the other elements into two sub-arrays based on whether they are less than or greater than the pivot, and then recursively sort the sub-arrays.

## How the QuickSort Works

### 1- Choose a Pivot

- Select a pivot element from the array. The choice of the pivot can significantly impact the algorithm's efficiency. In the implementation provided, the middle element is chosen as the pivot, but other strategies are possible.

### 2- Partitioning

- Rearrange the elements in the array such that elements less than the pivot are moved to the left, and elements greater than the pivot are moved to the right. The pivot itself is now in its final sorted position.
- This step is commonly known as the partitioning step.

### 3- Recursion

- Recursively apply the QuickSort algorithm to the sub-arrays created on either side of the pivot.
- The left sub-array contains elements that are less than the pivot, and the right sub-array contains elements that are greater than the pivot.
- The recursion continues until the base case is reached, where the sub-arrays have one or zero elements, which are considered sorted.

### 4- Combine Results

- As the recursion unwinds, the sorted sub-arrays are combined to produce the final sorted array.

### 5- Base Case

- The base case of the recursion is when an array has one or zero elements. In such cases, the array is considered sorted, and no further sorting is required.

The efficiency of QuickSort is attributed to its in-place nature (it often requires only a constant amount of additional memory) and its average-case time complexity of O(n log n). However, it's important to note that QuickSort can have a worst-case time complexity of O(n^2) when a poorly chosen pivot leads to unbalanced partitions. Various optimizations, such as choosing a good pivot strategy (e.g., median-of-three), are employed to mitigate this issue in practice.

QuickSort is widely used and has been a fundamental algorithm in many programming languages and libraries.

## Time Complexity

- Worst Case Time Complexity: O(n^2)
- Average Case Time Complexity: O(n log n)
- Best Case Time Complexity: O(n log n)
- Space Complexity (In-Place): O(log n)
- Space Complexity (With Additional Memory): O(n)

## Quick-sort with Hungarian (Küküllőmenti legényes) folk dance :slightly_smiling_face

If you still think that you do not fully understand, you can watch the video below.

[![quick-sort-hungarian-folk-dance](https://img.youtube.com/vi/ywWBy6J5gz8/0.jpg)](https://www.youtube.com/watch?v=ywWBy6J5gz8)
