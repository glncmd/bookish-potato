### A compilation of solutions to problems as coding practice.
1. [two-sum](#two-sum)
2. [add-two](#add-two)
3. [longest-substring](#longest-substring)
4. [median-sorted-arrays](#median-sorted-arrays)
5. [longest-palindrome](#longest-palindrome)
6. [zig-zag-conversion](#zig-zag)

# two-sum<a name="two-sum"></a> 
A small Python project where: given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`

Assume that each input would have exactly one solution, and the same element cannot be used twice.

_Sample output:_
```python
twoSum([2, 7, 11, 15], 9)
[0, 1]

twoSum([3, 2, 4], 6)
[1, 2]

twoSum([3, 3], 6)
[0, 1]
```

_Problem from:_  
https://leetcode.com/problems/two-sum/

# add-two<a name="add-two"></a> 
A small python project where: given two non-empty linked lists representing two non-negative integers; The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

Assume the two numbers do not contain any leading zero, except the number 0 itself.

_Sample output:_
```python
#Input: l1 = [2, 4, 3], l2 = [5, 6, 5]
l1 = ListNode(2, ListNode(4, ListNode(3, None)))
l2 = ListNode(5, ListNode(6, ListNode(5, None)))

#Output: [7, 0, 9]
ListNode(7, ListNode(0, ListNode(9, None)))
```

_Learnings:_
* Linked Lists
* Chained assignments
* divmod() method

_Problem from:_  
https://leetcode.com/problems/add-two-numbers/

# longest-substring<a name="longest-substring"></a> 
A small python project where: given a string, find the length of the longest substring without repeating characters.

_Sample output:_
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

_Learnings:_
* Definitions of:
	* Subarray
	* Substring
	* Subsequence
	* Subset

_Problem from:_  
https://leetcode.com/problems/longest-substring-without-repeating-characters/

# median-sorted-arrays<a name="median-sorted-arrays"></a> 
A small python project where: given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return the median of the two sorted arrays.

___The overall run time complexity should be O(log (m+n))___

_Sample output:_
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

_Learnings:_
* Introduction to Big O Notation and Time Complexity

_References:_
* https://www.youtube.com/watch?v=LPFhl65R7ww  
* https://medium.com/@hazemu/finding-the-median-of-2-sorted-arrays-in-logarithmic-time-1d3f2ecbeb46

_Problem from:_  
https://leetcode.com/problems/median-of-two-sorted-arrays/

# longest-palindrome<a name="longest-palindrome"></a> 
A small python project where: given a string `s`, return the longest palindromic substring in `s`.

_Sample output:_
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

_Learnings:_
* Return value annotations

_Problem from:_  
https://leetcode.com/problems/longest-palindromic-substring/

# zig-zag-conversion<a name="zig-zag"></a> 
A small python project where: given a string `s` e.g. `"PAYPALISHIRING"` convert it in a zigzag pattern on a given number of rows `numRows` like this:  
```
P   A   H   N
A P L S I I G
Y   I   R
```
And then read line by line: `"PAHNAPLSIIGYIR"`

_Sample output:_
```python
convert('PAYPALISHIRING', 3)
'PAHNAPLSIIGYIR'

convert('PAYPALISHIRING', 4)
'PINALSIGYAHRPI'

convert('PAYPALISHIRING', 5)
'PHASIYIRPLIGAN'

convert('A', 2)
'A'
```

_Problem from:_  
https://leetcode.com/problems/zigzag-conversion/
