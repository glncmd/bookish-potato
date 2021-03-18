def reverse(x: int) -> int:
    sign = 1 if x > 0 else -1 #can be written as [-1, 1][x > 0]
    x_rev = sign * int(str(abs(x))[::-1])
    return x_rev if -2 ** 31 <= x_rev <= (2 ** 31) - 1 else 0