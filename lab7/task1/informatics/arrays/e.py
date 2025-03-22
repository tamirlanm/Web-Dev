N = int(input())  
a = list(map(int, input().split()))  

for i in range(1, N):  
    if (a[i] > 0 and a[i - 1] > 0) or (a[i] < 0 and a[i - 1] < 0):  
        print("YES")  
        break  
else:  
    print("NO")
