# Bitonic Sort

Bitonic Sort is a parallel sorting algorithm that sorts a sequence of elements in both ascending and descending orders. It is based on the concept of bitonic sequences, which are sequences that first increase and then decrease (or vice versa).

## How Bitonic Sort Works

### 1- Initialization

- Bitonic Sort begins with an unsorted sequence of elements.

### 2- Recursive Division

- The sequence is recursively divided into two halves until each subsequence contains only one element. This division process creates a bitonic sequence, where each half is either monotonically increasing or decreasing.

### 3- Bitonic Sorting

- Within each recursive step, the algorithm performs a bitonic sorting operation on the subsequence.
- Bitonic sorting involves comparing and swapping elements in the sequence to ensure that each half of the sequence is in a bitonic order.
- The bitonic sorting operation is typically performed in parallel, making Bitonic Sort suitable for parallel architectures.

### 4- Bitonic Merging

- After the recursive division and bitonic sorting steps are completed, the algorithm performs a bitonic merging operation to merge the bitonic sequences together.
- Bitonic merging involves comparing and swapping elements in pairs across the entire sequence to create a bitonic sequence that transitions from ascending to descending (or vice versa).

### 5- Final Merging

- The final step of Bitonic Sort involves merging the two sorted halves of the sequence together into a single sorted sequence.
- This merging step combines the two bitonic sequences into a single sorted sequence in either ascending or descending order, depending on the desired final ordering.

## Time Complexity

- Best Case: O(n * log^2(n))
- Average Case: O(n * log^2(n))
- Worst Case: O(n * log^2(n))
- Space Complexity: O(1)

### Best Case

O(n * log^2(n)) - The best-case time complexity of Bitonic Sort is O(n* log^2(n)). Similar to the worst and average cases, the best-case performance of the algorithm is bounded by the number of elements in the input sequence and the logarithmic number of iterations required for recursive division and bitonic merging.

### Average Case

O(n * log^2(n)) - The average-case time complexity of Bitonic Sort is also O(n* log^2(n)). While the actual performance of the algorithm may vary depending on the distribution of input data, the average-case time complexity remains the same due to the recursive nature of the algorithm.

### Worst Case

O(n * log^2(n)) - In the worst case, where n is the number of elements in the input sequence, Bitonic Sort has a time complexity of O(n* log^2(n)). This worst-case complexity arises from the recursive division and bitonic merging operations, which require O(log^2(n)) iterations, each involving comparisons and swaps of O(n) elements.

### Space Complexity

Auxiliary Space: O(1) - Bitonic Sort is typically implemented as an in-place sorting algorithm, meaning it sorts the input sequence by rearranging elements within the sequence itself. While additional memory may be required for intermediate steps of the algorithm, the auxiliary space complexity is considered O(1) (constant) because the amount of additional memory is independent of the size of the input sequence.

Bitonic Sort's time complexity is influenced by the logarithmic number of iterations required for recursive division and bitonic merging, resulting in a time complexity of O(n * log^2(n)) in the worst, average, and best cases. Additionally, Bitonic Sort is typically implemented as an in-place sorting algorithm, meaning it sorts the input sequence by rearranging elements within the sequence itself, with auxiliary space complexity considered O(1).
