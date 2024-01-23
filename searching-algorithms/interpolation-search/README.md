# Interpolation Search

Interpolation Search is a searching algorithm that works particularly well on uniformly distributed, sorted arrays. The key idea behind Interpolation Search is to estimate the probable position of the target element based on its value and the range of values in the array.

## How Interpolation Search Works

### 1- Initialization

- Given a sorted array `arr`, a target element `target`, and two pointers `low` and `high`, initially set `low = 0` and `high = arr.length - 1`.

### 2- Interpolation Formula

- Use the interpolation formula to estimate the probable position of the target element within the current search range:

```typescript
pos = low + ((target - arr[low]) * (high - low)) / (arr[high] - arr[low])
```

- This formula assumes that the values in the array are uniformly distributed. It calculates a position `pos` that is closer to the expected position of the target based on its value.

### 3- Comparison and Adjustment

- Compare the value at the estimated position `arr[pos]` with the target element.
- If `arr[pos]` is equal to the target, the target element is found, and the index `pos` is returned.
- If `arr[pos]` is less than the target, adjust the search range to the right by updating `low = pos + 1`.
- If `arr[pos]` is greater than the target, adjust the search range to the left by updating `high = pos - 1`.

### 4- Iteration

- Repeat steps 2-3 until the target element is found or the search range becomes empty (`low > high`).

### 5- Termination

- If the target element is found during the process, return the index `pos` where the element is located.
- If the search range becomes empty and the target is not found, return -1 to indicate that the target element is not present in the array.

### Key Points

- The interpolation formula is the key feature of Interpolation Search, allowing the algorithm to adapt its search based on the estimated position of the target.
- Interpolation Search can be more efficient than binary search for uniformly distributed arrays, but it may perform poorly if the values are not evenly distributed.
- In the best-case scenario, when the values are evenly distributed, Interpolation Search has an average time complexity of O(log log n), making it more efficient than binary search. However, in the worst case, it can degrade to O(n) if the values are not evenly distributed.

## Time Complexity

- Worst Case Time Complexity: O(n)
- Average Case Time Complexity: O(log log n) (for uniformly distributed arrays)
- Best Case Time Complexity: O(1)
- Auxiliary Space Complexity: O(1)

### Worst Case

The worst-case time complexity of Interpolation Search is O(n), which occurs when the array is not uniformly distributed, and the interpolation formula does not effectively narrow down the search space. In such cases, the algorithm can degrade to a linear search.

### Average Case

In the average case, when the values are uniformly distributed, Interpolation Search has an average time complexity of O(log log n). This is a faster growth rate compared to binary search, making it more efficient on average for uniformly distributed arrays.

### Best Case

The best-case time complexity is O(1), which occurs when the target element is found at the estimated position in the first iteration.

### Auxiliary Space Complexity

The auxiliary space complexity of Interpolation Search is O(1), indicating that the algorithm uses a constant amount of additional space regardless of the size of the input array. The primary operations involve updating pointers and calculating the estimated position, which do not require additional space proportional to the input size.
