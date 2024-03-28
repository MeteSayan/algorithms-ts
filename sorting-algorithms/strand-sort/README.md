# Strand Sort

Strand Sort is a sorting algorithm that operates by repeatedly pulling sorted sublists (strands) from the input array and merging them together until the input array is empty.

## How Strand Sort Works

### 1- Initialization

- Strand Sort begins with an empty list of sorted strands.

### 2- Extracting Strands

- Strand Sort iterates through the input array, extracting sorted sublists (strands) from it.
- Initially, the first element of the input array is taken as the first element of the first strand.

### 3- Building Strands

- For each subsequent element in the input array, if it is greater than or equal to the last element of the current strand, it is added to the current strand.
- If an element cannot be added to the current strand (because it is smaller than the last element), a new strand is created with that element.

### 4- Merging Strands

- After extracting all possible strands from the input array, the sorted strands are merged pairwise.
- The strands are merged by repeatedly combining adjacent pairs of strands until only one strand remains.

### 5- Repeat Until Sorted

- Steps 2 to 4 are repeated until the input array becomes empty and all elements have been processed.
- The final strand, obtained after merging all strands, represents the sorted version of the input array.

## Time Complexity

- Best Case: O(n)
- Average Case: O(n^2)
- Worst Case: O(n^2)
- Space Complexity: O(1)

### Best Case

O(n) - The best-case time complexity of Strand Sort is O(n), which occurs when the input array is already nearly sorted or when the number of out-of-order elements is minimal. In this case, the number of strands formed is minimal, resulting in linear time complexity for merging them.

### Average Case

O(n^2) - The average-case time complexity of Strand Sort is also O(n^2). While Strand Sort can be more efficient than other quadratic-time sorting algorithms for certain types of input data, especially when the input contains many pre-sorted sequences, its average-case time complexity remains the same.

### Worst Case

O(n^2) - In the worst case, where each element forms a separate strand, the time complexity of Strand Sort is O(n^2), where n is the number of elements in the input array. This occurs when the input array is in reverse order or when there are many out-of-order elements, resulting in the maximum possible number of strands and quadratic time complexity for merging them.

### Space Complexity

Auxiliary Space: O(1) - Strand Sort is an in-place sorting algorithm, meaning it sorts the array by rearranging elements within the input array itself. It doesn't require any additional memory beyond the input array. Therefore, the auxiliary space complexity of Strand Sort is O(1), indicating constant space usage.

Strand Sort's time complexity remains quadratic in the worst and average cases, making it less efficient compared to some other sorting algorithms for large datasets. However, its performance can be improved for certain types of input data, especially when the input contains many pre-sorted sequences. Additionally, Strand Sort is stable and works in-place, meaning it preserves the relative order of equal elements in the input array and doesn't require additional memory beyond the input array.
