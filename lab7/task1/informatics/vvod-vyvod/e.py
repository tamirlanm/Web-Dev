v = int(input())
t = int(input())
p = (v * t) % 109
if p>=0:
    print(p)
else:
    print(p+109)