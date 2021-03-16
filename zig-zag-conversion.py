def convert(s: str, numRows: int) -> str:
    if numRows == 1 or numRows > len(s):
        return s

    lst, s_lst = [], list(s)

    for _ in range(numRows):
        lst.append(s_lst.pop(0))

    while s_lst:
        for x in range(numRows - 2, -1, -1):
            if not s_lst: break
            lst[x] += s_lst.pop(0)
            
        for y in range(1, numRows):
            if not s_lst: break
            lst[y] += s_lst.pop(0)

    return ''.join(lst)