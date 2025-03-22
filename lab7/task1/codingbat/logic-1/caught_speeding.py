def caught_speeding(speed, is_birthday):
    speed_limit1 = 60 + (5 if is_birthday else 0)
    speed_limit2 = 80 + (5 if is_birthday else 0)
    
    if speed <= speed_limit1:
        return 0  
    elif speed <= speed_limit2:
        return 1  
    else:
        return 2  
