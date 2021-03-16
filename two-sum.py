def twoSum(nums, target):
    i = 0
    for num in nums:
        i2 = i+1
        for num2 in nums[i2:]:
            if num + num2 == target:
                return [i, i2]
            else:
                i2 += 1
                continue
        else:
            i += 1
    else:
        return 'N/A'