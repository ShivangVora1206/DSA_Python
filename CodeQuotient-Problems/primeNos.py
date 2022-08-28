
def verifyPrime(n):
    if n == 0 or n == 1:
        return False
    for i in range(2, int(n**(0.5))+1):
        if n%i == 0:
            return False
    return True


print(verifyPrime(6))