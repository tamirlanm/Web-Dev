import math
n = int(input())
i = 2
c = 0
while True:
    d = math.pow(i, c)
    if d > n:
        break
    print(int(d), end=" ")
    c += 1