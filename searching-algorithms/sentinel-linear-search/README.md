# Sentinel Linear Search

The Sentinel Linear Search algorithm is a variation of the traditional linear search algorithm, which is used to find the position of a specific element in an array. The primary difference lies in the way it handles the end of the array, making it slightly more efficient.

## How the Sentinel Linear Search Works

### 1- Initialization

The array to be searched is augmented by adding a sentinel element at the end. The sentinel is a special value that is guaranteed not to be in the original array.

### 2- Search Process

The algorithm starts from the beginning of the array and compares each element with the target element.
The search continues until the target element is found or until the algorithm reaches the sentinel at the end of the array.

### 3- Termination

If the target element is found before reaching the sentinel, the algorithm returns the index of the target element.
If the algorithm reaches the sentinel, it stops the search. Since the sentinel is a unique value not present in the original array, it guarantees that the search will always terminate.

### 4- Cleanup

After the search is completed, the sentinel element is removed from the array before returning the result.

## Time Complexity

- Worst Case Time Complexity: O(n)
- Average Case Time Complexity: O(n)
- Best Case Time Complexity: O(1)
- Auxiliary Space Complexity: O(1)
