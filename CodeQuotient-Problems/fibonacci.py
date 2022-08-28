def fib_sequence(n):
    a, b = 0 , 1
    print(a)
    if n > 1:
        print(b)
        for i in range(n-2):
            c = a+b
            print(c)
            a = b
            b = c
fib_sequence(1)
