# Bucket Sort

Bucket Sort is a sorting algorithm that divides the input array into a set of buckets, each representing a range of values. The elements are then distributed into these buckets based on their values. After that, each bucket is sorted individually using a simple sorting algorithm, and finally, the sorted buckets are concatenated to produce the overall sorted array.

## How Bucket Sort Works

### 1- Find the Maximum and Minimum Values

- Traverse the input array to find the maximum and minimum values. Let's call these `max` and `min`.

### 2- Create Buckets

- Determine the range of values (`max - min`).
- Decide on the number of buckets to create. The number of buckets can be determined based on the range and the desired granularity.

### 3- Distribute Elements into Buckets

- Iterate through the input array, placing each element into the appropriate bucket based on its value.
- The formula to determine the index of the bucket for an element `arr[i]` is `(arr[i] - min) / range`, where `range` is the width of each bucket.

### 4- Sort Each Bucket

- Sort each individual bucket. This can be done using any suitable sorting algorithm (e.g., insertion sort, quicksort, or mergesort).
- If the range of values in each bucket is small, a simple algorithm like insertion sort might be sufficient.

### 4- Concatenate Sorted Buckets

- Concatenate the sorted buckets to obtain the final sorted array.

### Key Points

- The efficiency of Bucket Sort depends on the distribution of elements into buckets.
- It is generally suitable when the input data is uniformly distributed.
- The number of buckets and the sorting algorithm used for each bucket can impact the performance of the algorithm.

## Time Complexity

- Best Case: O(n + k)
- Average Case: O(n + n^2/k + k)
- Worst Case: O(n^2)
- Space Complexity: O(n + k)

### Best Case

O(n + k) - This occurs when each element is placed in a separate bucket, and each bucket is sorted using an efficient algorithm, resulting in a linear time complexity.

### Average Case

O(n + n^2/k + k), where n is the number of elements, k is the number of buckets, and the worst-case time complexity is O(n^2). This average-case time complexity assumes a relatively uniform distribution of elements among the buckets and efficient sorting within each bucket.

### Worst Case

O(n^2) - This occurs when all elements are placed in a single bucket, and the bucket needs to be sorted using a less efficient sorting algorithm (e.g., insertion sort).

### Space Complexity

Auxiliary Space: O(n + k) - The space complexity includes the auxiliary space needed for the buckets and the sorting within each bucket. The additional space complexity is incurred by creating and maintaining the buckets.

### Key Points For Time Complexity

- The efficiency of Bucket Sort is influenced by the distribution of elements into buckets.
- In practice, the algorithm can be efficient when the input data is uniformly distributed among the buckets, and the number of buckets is chosen appropriately.
- The space complexity is dominated by the number of buckets and the space needed for sorting within each bucket.

It's important to note that the performance of Bucket Sort can vary based on the specific characteristics of the input data and the implementation choices, such as the choice of sorting algorithm within each bucket. The algorithm is often used when the range of input values is not too large and the data is distributed relatively evenly.
