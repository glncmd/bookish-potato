def longestPalindrome(s: str) -> str:
    ans = s[0]
    for x in range(len(s)):
        for y in range(len(s), x, -1):
            if s[x] == s[y - 1] and s[x:y] == s[x:y][::-1]:
                if len(s[x:y]) > len(ans):
                    ans = s[x:y]
    return ans