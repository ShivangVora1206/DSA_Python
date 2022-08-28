def sum(n):
    if n <= 1:
        return 1
    return n+sum(n-1)

print(sum(1))

def printFun(test):

    if (test < 1):
        return
    else:

        print(test, end="")
        printFun(test-1) 
        print(test, end="")
        return

test = 10
printFun(test)
print('\n')

def test(n):
    if n < 0:
        return 
    print(n)
    return test(n-1)
print(test(5))