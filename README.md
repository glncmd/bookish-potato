_A compilation of solutions to problems as coding practice._

## two-sum
A small Python project where: given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`

Assume that each input would have exactly one solution, and the same element cannot be used twice.

Sample output:
```python
twoSum([2, 7, 11, 15], 9)
[0, 1]

twoSum([3, 2, 4], 6)
[1, 2]

twoSum([3, 3], 6)
[0, 1]
```

Problem from:  
https://leetcode.com/problems/two-sum/
  

## add-two
A small python project where: given two non-empty linked lists representing two non-negative integers; The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

Assume the two numbers do not contain any leading zero, except the number 0 itself.

Sample output:
```python
#Input: l1 = [2, 4, 3], l2 = [5, 6, 5]
l1 = ListNode(2, ListNode(4, ListNode(3, None)))
l2 = ListNode(5, ListNode(6, ListNode(5, None)))

#Output: [7, 0, 9]
ListNode(7, ListNode(0, ListNode(9, None)))
```

Learnings:
* Linked Lists
* Chained assignments
* divmod() method

Problem from:  
https://leetcode.com/problems/add-two-numbers/
  

## longest-substring
A small python project where: given a string, find the length of the longest substring without repeating characters.

Sample output:
```python
lengthOfLongestSubstring("abccabcbb")
3

lengthOfLongestSubstring("bbbbb")
1

lengthOfLongestSubstring("pwwkew")
3

lengthOfLongestSubstring("a")
1

lengthOfLongestSubstring("")
0
```

Learnings:
* Definitions of:
	* Subarray
	* Substring
	* Subsequence
	* Subset

Problem from:  
https://leetcode.com/problems/longest-substring-without-repeating-characters/
  

## median-sorted-arrays
A small python project where: given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return the median of the two sorted arrays.

___The overall run time complexity should be O(log (m+n))___

Sample output:
```python
findMedianSortedArrays([4,5],[1,2,3])
3

findMedianSortedArrays([1,3],[2])
2

findMedianSortedArrays([1,2],[3,4])
2.5

findMedianSortedArrays([0,0],[0,0])
0.0

findMedianSortedArrays([2],[])
2
```

Learnings:
* Introduction to Big O Notation and Time Complexity

References:
* https://www.youtube.com/watch?v=LPFhl65R7ww  
* https://medium.com/@hazemu/finding-the-median-of-2-sorted-arrays-in-logarithmic-time-1d3f2ecbeb46

Problem from:  
https://leetcode.com/problems/median-of-two-sorted-arrays/
  

## longest-palindrome
A small python project where: given a string `s`, return the longest palindromic substring in `s`.

Sample output:
```python
longestPalindrome("racecarracecarrrr")
'racecarracecar'

longestPalindrome("abcdcba")
'abcdcba'

longestPalindrome("babad")
'bab'

longestPalindrome("cbbd")
'bb'

longestPalindrome("ccc")
'ccc'

longestPalindrome("ac")
'a'

longestPalindrome("a")
'a'
```

Learnings:
* Return value annotations

Problem from:  
https://leetcode.com/problems/longest-palindromic-substring/
