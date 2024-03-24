n = int(input())
a = list(map(int, input().split()))

for i in range(0, int(n / 2)):
    temp = a[i]
    a[i] = a[n - i - 1]
    a[n - i - 1] = temp
result = ""
for x in a:
    result += str(x) + " "
print(result)