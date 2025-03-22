a = int(input())
b = int(input())
c = int(input())
d = int(input())
for i in range(a, b+1):
    x = i % d
    if c==x:
        print(i, end=" ")