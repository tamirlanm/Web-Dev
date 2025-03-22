def sum67(nums):
    total = 0
    ignore = False  

    for num in nums:
        if num == 6:
            ignore = True 
            continue
        if ignore:
            if num == 7:
                ignore = False 
            continue
        total += num  

    return total

