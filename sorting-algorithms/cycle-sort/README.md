# Cycle Sort

Cycle Sort is an in-place sorting algorithm that minimizes the number of memory writes by cyclically rotating elements to their correct positions.

## How Cycle Sort Works

### 1- Start with Cycle

- Cycle Sort begins by iterating through the array, treating each element as the start of a cycle.

### 2- Find Correct Position

- For each cycle, we find the correct position for the current element within the cycle. This is done by counting the number of elements smaller than the current element in the remaining portion of the array.

### 3- Swap Elements

- Once we find the correct position for the current element, we swap it with the element at that position. This places the current element in its correct sorted position within the array.

### 4- Rotate the Rest of the Cycle

- After swapping the elements, we continue rotating the rest of the cycle until we return to the original position. This step ensures that all elements within the cycle are placed in their correct positions.

### 5- Repeat Until Sorted

- We repeat this process for each cycle in the array until all elements are sorted. Each iteration moves at least one element to its correct position, so the process eventually results in a sorted array.

## Time Complexity

- Best Case: O(n^2)
- Average Case: O(n^2)
- Worst Case: O(n^2)
- Space Complexity: O(1)

### Best Case

O(n^2) - The best-case time complexity of Cycle Sort is O(n^2), which occurs when the array is already nearly sorted or contains very few out-of-place elements. However, even in the best-case scenario, Cycle Sort still requires quadratic time to sort the array.

### Average Case

O(n^2) - The average-case time complexity of Cycle Sort is also O(n^2). While Cycle Sort tends to perform better than other quadratic-time sorting algorithms in practice, its average-case time complexity remains the same.

### Worst Case

O(n^2) - In the worst case, where each element needs to be moved to its correct position through a cycle, Cycle Sort has a time complexity of O(n^2), where n is the number of elements in the array. This occurs when the array is in reverse order or when there are many duplicate elements.

### Space Complexity

Auxiliary Space: O(1) - Cycle Sort is an in-place sorting algorithm, meaning it does not require any additional memory beyond the input array. It achieves sorting by cyclically rotating elements within the array itself. Therefore, the auxiliary space complexity of Cycle Sort is O(1), indicating constant space usage.

Cycle Sort's time complexity remains quadratic in all cases, making it less efficient compared to some other sorting algorithms for large datasets. However, its in-place nature and efficient use of memory writes make it useful in scenarios where memory constraints are a concern, especially when the input contains duplicate elements.
