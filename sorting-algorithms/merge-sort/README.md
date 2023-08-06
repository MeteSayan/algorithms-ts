# Merge Sort

Using the Divide and Conquer technique, we divide a problem into subproblems. When the solution to each subproblem is ready, we 'combine' the results from the subproblems to solve the main problem.

Suppose we had to sort an array A. A subproblem would be to sort a sub-section of this array starting at index p and ending at index r, denoted as A[p..r].

### Divide

If q is the half-way point between p and r, then we can split the subarray A[p..r] into two arrays A[p..q] and A[q+1, r].

### Conquer

In the conquer step, we try to sort both the subarrays A[p..q] and A[q+1, r]. If we haven't yet reached the base case, we again divide both these subarrays and try to sort them.

### Combine

When the conquer step reaches the base step and we get two sorted subarrays A[p..q] and A[q+1, r] for array A[p..r], we combine the results by creating a sorted array A[p..r] from two sorted subarrays A[p..q] and A[q+1, r].

![Merge-Sort-Animation](https://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif?20151222172210)

## Time Complexity

- Worst Case: O(n*log n)
- Average Case O(n*log n)
- Best Case O(n*log n)
- Auxiliary Space: O(n)

## Merge-sort with Transylvanian-saxon (German) folk dance :slightly_smiling_face

If you still think that you do not fully understand, you can watch the video below.

[![merge-sort-Transylvanian-saxon-folk-dance](https://img.youtube.com/vi/XaqR3G_NVoo/0.jpg)](https://www.youtube.com/watch?v=XaqR3G_NVoo)

## References

- <https://www.programiz.com/dsa/merge-sort>
