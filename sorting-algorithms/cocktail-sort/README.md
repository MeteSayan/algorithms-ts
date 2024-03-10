# Cocktail Sort

Cocktail Sort, also known as Bidirectional Bubble Sort, is a variation of the Bubble Sort algorithm. It sorts the array in both directions, alternatively moving the largest and smallest elements towards their correct positions.

## How Cocktail Sort Works

### 1- Initialize Indices

- Cocktail Sort begins with two pointers, `start` and `end`, initially pointing to the first and last elements of the array, respectively.

### 2- Forward Pass (Left to Right)

- During the forward pass, Cocktail Sort iterates through the array from left to right, comparing adjacent elements.
- If an element is greater than the next element, it swaps them, bringing the larger element towards the end of the array.

### 3- Update End Index

- After completing the forward pass, Cocktail Sort updates the `end` index to exclude the elements that have already been sorted in previous passes.

### 4- Backward Pass (Right to Left)

- During the backward pass, Cocktail Sort iterates through the array from right to left, comparing adjacent elements.
- If an element is smaller than the previous element, it swaps them, bringing the smaller element towards the beginning of the array.

### 5- Update Start Index

- After completing the backward pass, Cocktail Sort updates the `start` index to exclude the elements that have already been sorted in previous passes.

### 5- Repeat Until Sorted

- Cocktail Sort repeats the forward and backward passes alternately until no swaps are made in a complete pass through the array.
- If no swaps occur in a pass, it means that the array is already sorted, and the algorithm terminates.

## Time Complexity

- Best Case: O(n)
- Average Case: O(n^2)
- Worst Case: O(n^2)
- Space Complexity: O(1)

### Best Case

O(n) - The best-case time complexity of Cocktail Sort is O(n), which occurs when the array is already nearly sorted or when the number of out-of-order elements is minimal. In this case, the algorithm still performs a linear number of comparisons and swaps to verify that the array is sorted.

### Average Case

O(n^2) - The average-case time complexity of Cocktail Sort is also O(n^2). While Cocktail Sort tends to perform better than Bubble Sort in practice, especially for partially sorted arrays or arrays with a small number of out-of-order elements, its average-case time complexity remains the same.

### Worst Case

O(n^2) - In the worst case, Cocktail Sort performs as inefficiently as Bubble Sort, with a time complexity of O(n^2). This occurs when the array is in reverse order or when there are many out-of-order elements, leading to maximum possible swaps and comparisons.

### Space Complexity

Auxiliary Space: O(1) - Cocktail Sort is an in-place sorting algorithm, meaning it does not require any additional memory beyond the input array. It sorts the array by swapping elements within the array itself. Therefore, the auxiliary space complexity of Cocktail Sort is O(1), indicating constant space usage.

Cocktail Sort's time complexity remains quadratic in the worst and average cases, making it less efficient compared to some other sorting algorithms for large datasets. However, its bidirectional approach can lead to improved performance for partially sorted arrays or arrays with a small number of out-of-order elements. Additionally, Cocktail Sort's in-place nature and efficient use of memory make it suitable for sorting scenarios where memory constraints are a concern.
