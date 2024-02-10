# Pigeonhole Sort

Pigeonhole Sort is a sorting algorithm that is effective when the range of elements in the array is relatively small compared to the size of the array. It works by distributing the elements into "pigeonholes" or buckets, then sorting the elements within each bucket individually.

## How Pigeonhole Sort Works

### 1- Determine the Range

- Pigeonhole Sort begins by finding the minimum and maximum values in the input array to determine the range of elements.

### 2- Create Pigeonholes

- We create an array of "pigeonholes" or buckets, where each bucket corresponds to a possible value within the range. The number of pigeonholes is equal to the difference between the maximum and minimum values, plus one.

### 3- Distribute Elements into Pigeonholes

- We iterate through the input array and distribute each element into its corresponding pigeonhole. For example, if the minimum value in the array is `5` and the maximum value is `8`, we would distribute the value `7` into the pigeonhole at index `7 - 5 = 2`.

### 4- Copy Elements Back to Original Array

- After distributing all elements into pigeonholes, we iterate through the pigeonholes in order and copy the elements back to the original array. Since the elements within each pigeonhole are already sorted, this process effectively sorts the entire array.

## Time Complexity

- Best Case: O(n + range)
- Average Case: O(n + range)
- Worst Case: O(n + range)
- Space Complexity: O(range)

### Best Case

O(n + range) - The best-case time complexity of Pigeonhole Sort is O(n + range), which occurs when the distribution of elements into pigeonholes is relatively balanced and requires minimal processing.

### Average Case

O(n + range) - The average-case time complexity of Pigeonhole Sort is also O(n + range). It depends on the distribution of values in the array and the efficiency of distributing elements into pigeonholes.

### Worst Case

O(n + range) - In the worst case, where the range of values is comparable to the number of elements in the array, Pigeonhole Sort has a time complexity of O(n + range). This occurs when the distribution of elements into pigeonholes requires significant processing time.

### Space Complexity

Auxiliary Space: O(range) - Pigeonhole Sort requires additional space proportional to the range of values in the array to store the pigeonholes. Therefore, the auxiliary space complexity is O(range).

Pigeonhole Sort is most efficient when the range of values in the array is small compared to the number of elements, as this minimizes the additional space required and reduces the processing time for distributing elements into pigeonholes. However, its performance may degrade if the range of values is large or comparable to the number of elements in the array.
