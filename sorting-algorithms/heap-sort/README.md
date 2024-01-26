# Heap Sort

Heap Sort is a comparison-based sorting algorithm that uses a binary heap data structure to efficiently sort an array. It consists of two main phases: building a max-heap (or min-heap) and repeatedly extracting the maximum (or minimum) element from the heap to obtain the sorted array.

## How Heap Sort Works

### 1- Building the Heap

- Build Max Heap (for sorting in ascending order):
  - Start with the given array.
  - For each non-leaf node in the array (from the last non-leaf node to the first), perform the heapify operation.
  - The heapify operation ensures that the subtree rooted at the current node is a max-heap.

- Heapify Operation:
  - Compare the root node with its left and right children.
  - If the root is smaller than any of its children, swap the root with the larger child.
  - Recursively perform the heapify operation on the affected subtree.

### 2- Extracting Elements

- Extract Elements from the Heap:
  - After building the max heap, the largest element (root) is at the beginning of the array.
  - Swap the root (maximum element) with the last element in the array.
  - Reduce the size of the heap (exclude the last element) and heapify the root to maintain the max-heap property.
  - Repeat the process until the heap size becomes 1.

### Key Points

- The max heap property ensures that the maximum element is always at the root.
- The heapify operation ensures that after extracting the root, the remaining elements maintain the max-heap property.

## Time Complexity

- Best Case: O(n log n)
- Average Case: O(n log n)
- Worst Case: O(n log n)
- Space Complexity: O(1) (in-place sorting)

### Space Complexity

Auxiliary Space: O(1) - Heap Sort is an in-place sorting algorithm, meaning it uses only a constant amount of extra memory for storing temporary variables. The space required for the algorithm does not depend on the size of the input array.

### Key Points For Time Complexity

- Heap Sort is not sensitive to the initial order of the elements and is consistent in its time complexity.
- It is an in-place sorting algorithm but not a stable one, meaning that equal elements might not retain their relative order in the sorted output.
- The main factor influencing the performance of Heap Sort is the time complexity, which remains efficient even for large datasets.
