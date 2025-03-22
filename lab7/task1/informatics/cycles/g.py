import math
x = int(input())
for i in range(2, int(math.sqrt(x)) + 1):
    if x % i == 0:
        print(i)
        break
else:
    print(x)