def isPalindrome(x: int) -> bool:
    return True if str(x) == str(x)[::-1] else False

#Interesting solution from leetcode:
def isPalindrome(x):
    if x < 0 or (x > 0 and x % 10 == 0):
        return False
    
    return x == self.reverseUtil(x)
        
    def reverseUtil(self, x):
        result = 0

        while x != 0:
            digit = x % 10
            result = result * 10 + digit
            x = int(x / 10)
            
        return result 