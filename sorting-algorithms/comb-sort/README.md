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

O(n) - In the best-case scenario, TimSort performs as efficiently as insertion sort when the input array is already partially sorted or contains a small number of inversions.

### Average Case

O(n log n) - TimSort typically performs well on average, sorting most types of input data efficiently with a time complexity of O(n log n).

### Worst Case

O(n log n) - In the worst case, TimSort performs as efficiently as merge sort, which has a time complexity of O(n log n). This occurs when the input array is completely unsorted or reverse-sorted, requiring multiple merge operations to sort the array.

### Space Complexity

Auxiliary Space: O(n) - The auxiliary space complexity of TimSort is O(n) because it requires additional space proportional to the size of the input array for the merging step. This space is used to store temporary arrays during the merging process.

TimSort's performance and efficiency make it a popular choice for sorting large datasets in practice. It combines the strengths of merge sort and insertion sort, making it suitable for a wide range of input data and providing good performance in most scenarios.
