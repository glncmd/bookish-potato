def myAtoi(s: str) -> int:
    a, b = -2**31, 2**31 - 1
    x = s.strip()
    nums = '0'

    if not x: return 0

    if x[0] in '+-':
        nums = x[0] + '0'
        x = x[1:]

    for i in range(len(x)):
        if x[i].isdigit():
            nums += x[i]
        else: break

    if int(nums) > b: return b
    elif int(nums) < a: return a
    else: return int(nums)