import math
def power_value(a: float, b: int):
    return pow(a,b)
a, b = map(float,input().split())
b = int(b)
print((power_value(a, b)))