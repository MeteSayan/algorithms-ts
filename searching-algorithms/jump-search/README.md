# Jump Search

Jump Search is a searching algorithm that works on a sorted array. It follows a strategy of jumping through the array in fixed steps and then performing linear search in the vicinity of the target element.

## How Jump Search Works

### 1- Initialization

- Given a sorted array `arr` and a target element `target`, calculate the jump size, typically using the square root of the array size. Let `n` be the size of the array, and `jumpSize = Math.floor(Math.sqrt(n))`.

### 2- Jumping Through the Array

- Start with an index `prev` initialized to 0.
- Jump through the array in fixed steps of `jumpSize`.
- Check the value at the current index (`arr[Math.min(jumpSize, n) - 1]`).
- If the value at the current index is less than the target, update `prev` to the current index and increase the jump size (`jumpSize += Math.floor(Math.sqrt- (n))`).
- Repeat this process until you find a range where the target element might be located.

### 3- Linear Search in the Vicinity

- After finding the range where the target element might be located, perform a linear search in that vicinity.
- Start from the `prev` index and iterate up to `Math.min(jumpSize, n)`.
- Check each element in this range. If the target element is found, return its index.
- If the element is not found in this range, return -1 to indicate that the target element is not present in the array.

### 4- Termination

- The search terminates either when the target element is found, or the entire array has been traversed without finding the target element.

### Key Points

- Jump Search is efficient for large arrays, especially when the elements are uniformly distributed.
- The time complexity of Jump Search is O(√n), making it faster than linear search but simpler than binary search.
- The choice of the jump size affects the algorithm's performance. A smaller jump size may lead to more jumps but fewer linear search steps, while a larger jump size may result in fewer jumps but more linear search steps.

While Jump Search is not as commonly used as some other searching algorithms, it can be a reasonable choice in scenarios where a balance between simplicity and efficiency is desired.

## Time Complexity

- Worst Case Time Complexity: O(√n)
- Average Case Time Complexity: O(√n)
- Best Case Time Complexity: O(1)
- Auxiliary Space Complexity: O(1)

### Worst Case

The worst-case time complexity of Jump Search is O(√n), where n is the size of the array. This occurs when the target element is near the end of the array, and the algorithm has to perform multiple jumps before reaching the vicinity of the target.

### Average Case

The average-case time complexity is also O(√n). This assumes a uniform distribution of elements in the array, leading to a balanced number of jumps and linear search steps.

### Best Case

The best-case time complexity is O(1), which occurs when the target element is found in the first comparison during the jump phase. This happens when the target is close to the beginning of the array.

### Auxiliary Space Complexity

The auxiliary space complexity of Jump Search is O(1), indicating that the algorithm uses a constant amount of additional space regardless of the size of the input array. The primary operations involve updating pointers and calculating the jump size, which do not require additional space proportional to the input size.
