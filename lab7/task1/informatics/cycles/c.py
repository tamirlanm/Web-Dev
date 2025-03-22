import math
a = int(input())
b = int(input())
s = math.ceil(math.sqrt(a))
e = math.floor(math.sqrt(b))
for i in range(s, e + 1):
    print(i*i, end = " ")