class Employee:
    def __init__(self, name):
        self.name = name
        self.sendsReqTo = None

def specialEmployee(firstEmployee):
    if (firstEmployee is None):
        return None
    slow = firstEmployee
    fast = firstEmployee
    slow = slow.sendsReqTo
    if (fast is not None and fast.sendsReqTo is not None):
        fast = fast.sendsReqTo.sendsReqTo
    while (fast is not None and fast.sendsReqTo is not None):
        if (slow == fast):
            break
        slow = slow.sendsReqTo
        fast = fast.sendsReqTo.sendsReqTo

    if (fast is None or fast.sendsReqTo is None):
        return None
    slow = firstEmployee
    while (slow != fast):
        slow = slow.sendsReqTo
        fast = fast.sendsReqTo

    return slow

rajesh = Employee("rajesh")
shivam = Employee("shivam")
aman = Employee("aman")
karan = Employee("karan")
seema = Employee("seema")

rajesh.sendsReqTo = shivam
shivam.sendsReqTo = aman
aman.sendsReqTo = karan
karan.sendsReqTo = seema
seema.sendsReqTo = aman

print(specialEmployee(rajesh).name)