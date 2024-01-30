# Radix Sort

Radix Sort is a non-comparative sorting algorithm that works by distributing elements into buckets based on their individual digits or significant places. It processes the digits from the least significant place (LSD) to the most significant place (MSD) or vice versa, resulting in a stable sort.

## How Radix Sort Works

### 1- Find the Maximum Element

- Find the maximum element in the array to determine the number of digits in the maximum element. Let's call this maximum element `max`.

### 2- Perform Counting Sort for Each Digit Place

- Starting from the least significant digit (LSD), perform counting sort for each digit place.
- For each digit place (1s, 10s, 100s, ...), use counting sort to sort the array based on that digit place.
- The counting sort is stable, meaning that the relative order of elements with equal digit values is preserved.

#### Counting Sort for a Digit Place (e.g., 10s place)

##### 1- Count Occurrences

- Count the occurrences of each digit at the current place (e.g., 10s place) in the array.

##### 2- Modify Count Array

- Modify the count array to store the actual position of each digit in the output array.

##### 3- Build Output Array

- Build the output array by placing elements in their correct positions based on the digit at the current place.

##### 4- Update Count Array

- Update the count array to reflect the remaining occurrences of each digit.

### 3- Repeat for Each Digit Place

- Repeat the counting sort process for each digit place until all digits have been processed.

### Key Points

- Radix Sort is a stable sorting algorithm.
- It works well for integers with a limited number of digits.
- The time complexity is linear relative to the number of elements and the number of digits in the maximum element.

## Time Complexity

- Best Case: O(nk)
- Average Case: O(nk)
- Worst Case: O(nk), where n is the number of elements and k is the number of digits in the maximum element.
- Space Complexity: O(n + k)

### Space Complexity

Auxiliary Space: O(n + k), where n is the number of elements and k is the range of input values (maximum element - minimum element).

### Key Points For Time Complexity

- The time complexity of Radix Sort depends on the number of elements (n) and the number of digits in the maximum element (k).
- The space complexity includes the additional space used by the counting array and the output array.
- Radix Sort is a linear-time sorting algorithm, but its performance is influenced by the number of digits in the maximum element.

### NOTE

- The counting sort subroutine used in Radix Sort contributes to the overall space complexity, and in practice, it can be modified to reduce the auxiliary space to O(k) by avoiding the use of additional arrays. This modification, however, may make the algorithm less stable.

In summary, Radix Sort is efficient for sorting integers with a limited number of digits. The time complexity is linear relative to the number of elements and the number of digits in the maximum element, making it suitable for certain scenarios. The space complexity is influenced by the range of input values.
