# Fibonacci Search

Fibonacci Search is a searching algorithm that works on a sorted array and is a modification of binary search. It uses a series of Fibonacci numbers to determine the split points during the search.

## How Fibonacci Search Works

### 1- Initialization

- Given a sorted array `arr` and a target element `target`, initialize three variables:
  - `fibM2`: The (m-2)'th Fibonacci number (initially 0).
  - `fibM1`: The (m-1)'th Fibonacci number (initially 1).
  - `fib`: The m'th Fibonacci number (initially fibM2 + fibM1).
  - `offset`: An offset to start the comparison from (initially -1).

### 2- Find Fibonacci Numbers

- Determine the smallest Fibonacci number `fib` that is greater than or equal to the size of the array (`n`).
- Update `fibM2`, `fibM1`, and `fib` accordingly to represent the m'th, (m-1)'th, and (m-2)'th Fibonacci numbers.

### 3- Search Loop

- Enter a loop that continues as long as `fib` is greater than 1.
- Within each iteration of the loop:
  - Check if `fibM2` is a valid index (`offset + fibM2` should be less than `n`).
  - Compare the target element with the value at index `i` (either `offset + fibM2` or `offset + fibM1`, depending on the comparison).
  - If the target is greater than the value at index `i`, reduce the Fibonacci sequence by two places (`fib = fibM1, fibM1 = fibM2, fibM2 = fib - fibM1`).
  - If the target is less than the value at index `i`, reduce the Fibonacci sequence by one place (`fib = fibM2, fibM1 -= fibM2, fibM2 = fib - fibM1`).
  - If the target is found, return the index `i`.
  - Update `offset` based on the comparison.

### 4- Check for the Last Element

- After the loop, check if `fibM1` is 1 and if the element at index `offset + 1` is equal to the target. If so, return the index `offset + 1`.

### 5- Termination

- If the target element is not found in the array, return -1 to indicate that the element is not present.

### Key Points

- Fibonacci Search adapts the binary search concept but uses Fibonacci numbers to determine the split points.
- It is particularly useful when the size of the array is not known in advance, and it dynamically adjusts the search space based on Fibonacci numbers.
- The algorithm efficiently narrows down the search space and performs well in certain scenarios.

## Time Complexity

- Worst Case Time Complexity: O(log n)
- Average Case Time Complexity: O(log n)
- Best Case Time Complexity: O(1)
- Auxiliary Space Complexity: O(1)

### Worst Case

The worst-case time complexity of Fibonacci Search is O(log n), where n is the size of the sorted array. This occurs when the target element is located near the end of the array, and the algorithm performs a series of Fibonacci reductions, effectively narrowing down the search space logarithmically.

### Average Case

The average-case time complexity is also O(log n). Fibonacci Search adapts the binary search concept, and the search space is reduced efficiently using Fibonacci numbers, resulting in a logarithmic time complexity.

### Best Case

The best-case time complexity is O(1), which occurs when the target element is found at the first comparison. This is unlikely to happen in practical scenarios but represents the best-case scenario.

### Auxiliary Space Complexity

The auxiliary space complexity of Fibonacci Search is O(1), indicating that the algorithm uses a constant amount of additional space regardless of the size of the input array. The primary operations involve updating pointers, calculating Fibonacci numbers, and performing constant-time comparisons, which do not require additional space proportional to the input size.
