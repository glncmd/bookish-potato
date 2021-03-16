def lengthOfLongestSubstring(string):
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