# two-sum
def twoSum(nums: List[int], target: int) -> List[int]:
    i = 0
    for num in nums:
        i2 = i + 1
        for num2 in nums[i2:]:
            if num + num2 == target:
                return [i, i2]
            else:
                i2 += 1
        else:
            i += 1
    else:
        return 'N/A'


# add-two
class ListNode: # definition for singly-linked list:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

    def __repr__(self):
        return f'{self.__class__.__name__}({self.val}, {self.next})'

def addTwoNumbers(l1: ListNode, l2: ListNode) -> ListNode:
    x = ListNode()
    y = x
    carry = 0

    while l1 or l2 or carry:
        v1 = 0
        v2 = 0

        if l1:
            v1 = l1.val
            l1 = l1.next

        if l2:
            v2 = l2.val
            l2 = l2.next

        carry, v3 = divmod((v1 + v2 + carry), 10)
        y.next = ListNode(v3)
        y = y.next

    return x.next


# longest-substring
def lengthOfLongestSubstring(string: str) -> int:
    sub_s = []
    i, maxlength = 0, 0

    for letter in string:
        if letter not in sub_s:
            sub_s.append(letter)
            i += 1

        else:
            sub_s = sub_s[sub_s.index(letter)+1:]
            sub_s.append(letter)
            i = len(sub_s)

        if i > maxlength:
            maxlength = i

    return maxlength


# median-sorted-arrays
def findMedianSortedArrays(nums1: List[int], nums2: List[int]) -> float:
    if len(nums1) > len(nums2):
        nums1, nums2 = nums2, nums1

    m, n = len(nums1), len(nums2)
    
    if n == 0:
        raise ValueError

    a_min, a_max, half = 0, m, (m + n + 1) / 2

    while a_min <= a_max:
        a = int((a_min + a_max) / 2)
        b = int(half - a)

        if a > 0 and nums1[a - 1] > nums2[b]:
            a_max -= 1

        elif a < m and nums2[b - 1] > nums1[a]:
            a_min += 1

        else:
            if a == 0:
                left_max = nums2[b - 1]

            elif b == 0:
                left_max = nums1[a - 1]

            else:
                left_max = max(nums1[a - 1], nums2[b - 1])

            if (m + n) % 2 == 1:
                return left_max

            if a == m:
                right_min = nums2[b]

            elif b == n:
                right_min = nums1[a]

            else:
                right_min = min(nums1[a], nums2[b])

            return (left_max + right_min) / 2


# longest-palindrome
def longestPalindrome(s: str) -> str:
    ans = s[0]
    for x in range(len(s)):
        for y in range(len(s), x, -1):
            if s[x] == s[y - 1] and s[x:y] == s[x:y][::-1]:
                if len(s[x:y]) > len(ans):
                    ans = s[x:y]
    return ans