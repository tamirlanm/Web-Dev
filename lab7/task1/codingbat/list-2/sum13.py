def sum13(nums):
    total = 0
    skip = False  
    
    for num in nums:
        if num == 13:
            skip = True
            continue
        if skip:
            skip = False
            continue
        total += num  
    
    return total