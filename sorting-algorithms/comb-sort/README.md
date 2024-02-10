# Comb Sort

Comb Sort is a variation of bubble sort that introduces the concept of a gap or shrink factor. It repeatedly compares and swaps adjacent elements with a gap that decreases over iterations, similar to the way a comb moves through tangled hair, hence the name "Comb Sort".

## How Comb Sort Works

### 1- Initialize the Gap

- Comb Sort starts by initializing the gap (also known as the increment or shrink factor) to the length of the array.

### 2- Shrink the Gap

- The gap is then reduced in each iteration using a shrink factor. Typically, the shrink factor is chosen as a fraction less than 1, such as 1.3. The gap is recalculated at each iteration until it reaches 1.

### 3- Compare and Swap Elements

- Comb Sort performs a series of passes through the array, comparing and swapping adjacent elements with the current gap.
- If the elements at positions i and i + gap are out of order, they are swapped to bring them into the correct order.

### 4- Repeat Until Sorted

- The process of shrinking the gap and performing passes through the array continues until the gap becomes 1, or until no swaps are made during a pass.
- Once the gap becomes 1, the algorithm performs a final pass through the array using a gap of 1, essentially performing a bubble sort on the remaining unordered elements.

## Time Complexity

- Best Case: O(n log n)
- Average Case: O(n^2)
- Worst Case: O(n^2)
- Space Complexity: O(1)

### Best Case

O(n log n) - The best-case time complexity of Comb Sort is O(n log n), which occurs when the input array is already sorted or nearly sorted. However, this scenario is unlikely to occur in practice due to the nature of Comb Sort's gap reduction technique.

### Average Case

O(n^2) - The average-case time complexity of Comb Sort is also O(n^2). Although Comb Sort improves upon bubble sort by introducing the gap reduction technique, it still exhibits quadratic behavior on average.

### Worst Case

O(n^2) - In the worst case, Comb Sort performs as inefficiently as bubble sort, with a time complexity of O(n^2). This occurs when the input array is in reverse order, requiring a maximum number of comparisons and swaps.

### Space Complexity

Auxiliary Space: O(1) - Comb Sort requires only a constant amount of additional space (O(1)) for storing temporary variables and indices during the sorting process. It sorts the array in-place without requiring additional memory proportional to the input size.

Comb Sort's time complexity is influenced by the choice of the gap reduction factor, which determines the rate at which the gap decreases during each iteration. While Comb Sort provides a simple and memory-efficient sorting algorithm, it is generally not as efficient as more advanced sorting algorithms like quicksort or mergesort for large datasets. However, it can be useful for sorting small or nearly sorted arrays efficiently.
