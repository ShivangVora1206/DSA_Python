# college Name - RCPIT Shirpur
# Branch, Div - Comp, TY
# # problem 1 - time:2mins
# def add_string(str1):
#     if "ing" in str1:
#         str1 = str1+"ly"
#     elif len(str1) < 3:
#         str1 = str1
#     else:
#         str1 = str1 + "ing"

#     return str1

# str1="com"
# print(add_string(str1))


# # problem 2 - time:4mins
# def bracket_pattern(input_str):

#     if input_str[0] == ')' or input_str[len(input_str)-1] == '(':
#         return False
#     else:
#         list1 = []
#         for i in input_str:
#             if i == "(":
#                 list1.append(i)
#             if i == ")":
#                 try:
#                     list1.pop()
#                 except:
#                     return False
#         if len(list1) == 0:
#             return True

    
# input_str="()((())())"
# print(bracket_pattern(input_str))

# # problem 3 - time:1min

# def create_new_dictionary(prices):
#     new_dict = {}
#     for i in prices.keys():
#         if prices[i] > 200:
#             new_dict[i] = prices[i]

    
#     return new_dict

# prices = { 'ACME': 45.23,'AAPL': 612.78,'IBM': 205.55,'HPQ': 37.20,'FB': 10.75}
# print(create_new_dictionary(prices))

# # problem 4 - time:4mins
# def find_nine(nums):
#     flag = False
#     for i in range(4):
#         if i == len(nums)-1:
#             break
#         if nums[i] == 9:
#             flag = True
#             break
#     return flag
        
    

# nums=[1,9,4,5,6]
# print(find_nine(nums))

# # problem 5 - time:3mins
# def count_digits_letters(sentence):
#     letters, digits = 0, 0
#     for i in sentence:
#         if i.isalpha():
#             letters += 1
#         elif i.isdigit():
#             digits += 1
#     result_list = [letters, digits]
    
#     return result_list

# sentence="Infosys Mysore 570027"
# print(count_digits_letters(sentence))

# # problem 6 = time:3mins

# def list123(nums):
#     flag = False
#     for i in range(len(nums)-2):
#         if nums[i] == 1 and nums[i+1] == 2 and nums[i+2] == 3:
#             flag = True
#             break
#     return flag
    

    

# nums=[1,2,3,4,5]
# print(list123(nums))

# # problem 7 - time:4mins
# def seed_no(number,ref_no):
#     output = number
#     while number > 0:
#         temp = number%10
#         output *= temp
#         number //= 10
#     if output == ref_no:
#         return True
#     else:
#         return False
    
    
# number=123
# ref_no=738
# print(seed_no(number,ref_no))

# # problem 8 -time:2mins
# def calculate_net_amount(trans_list):
#     net_amount = 0
#     for i in trans_list:
#         temp = i.split(":")
#         if temp[0] == 'D':
#             net_amount += int(temp[1])
#         else:
#             net_amount -= int(temp[1])
    
#     return net_amount

# trans_list=["D:300","D:200","W:200","D:100"]
# print(calculate_net_amount(trans_list))

# # problem 9 - time :1min
# def generate_dict(number):
#     new_dict = {}
#     for i in range(1, number+1):
#         new_dict[i] = i*i

	
#     return new_dict

# number=20
# print(generate_dict(number))

# # problem 10 - time 2min
# def string_both_ends(input_string):
#     if len(input_string) < 2:
#         return -1
#     else:
#         output = input_string[:2] + input_string[len(input_string)-2:]
#         return output

# input_string="w3w"
# print(string_both_ends(input_string))

# # problem 11 - time:2min

# def find_upper_and_lower(sentence):
#     upper, lower = 0, 0
#     for i in sentence:
#         if i.isupper():
#             upper += 1
#         elif i.islower():
#             lower += 1
#     result_list = [upper, lower]
            
        
#     return result_list

# sentence="Come Here"
# print(find_upper_and_lower(sentence))

# # problem 12 - time:3min
# def generate_sentences(subjects,verbs,objects):
#     sentence_list = []
#     for i in subjects:
#         for j in verbs:
#             for k in objects:
#                 temp = i + " " + j + " " + k
#                 sentence_list.append(temp)


#     return sentence_list

# subjects=["I","You"]
# verbs=["love", "play"]
# objects=["Hockey","Football"]
# print(generate_sentences(subjects,verbs,objects))

# # problem 15 - time:1min
# def check_22(num_list):
#     flag = False
#     for i in range(len(num_list)-1):
#         if num_list[i] == 2 and num_list[i+1] == 2:
#             flag = True
#             break
#     return flag
        
# print(check_22([3,2,5,1,2,1,2,2]))

# # problem 23 - time:1min
# def divisible_by_sum(number):
#     _sum = 0
#     temp = number
#     while number>0:
#         _sum += number%10
#         number //= 10
#     if temp % _sum == 0:
#         return True
#     else:
#         return False

    
# number=42
# print(divisible_by_sum(number))

# # problem 24 - time:2mins
# def find_gcd(num1,num2):
#     for i in range(num1, 1, -1):
#         if num1%i == 0 and num2%i == 0:
#             return i
    

# num1=45
# num2=9
# print(find_gcd(num1,num2))

# # problem 25 - time:30secs

# def list_of_count(word_list):
#     count_list = []
#     for i in word_list:
#         count_list.append(len(i))
    
#     return count_list

# word_list=["COme","here"]
# print(list_of_count(word_list))

# # problem 26 - time:3min
# def check_occurence(string):
#     list1 = string.split(" ")
#     jetcount, matcount = 0, 0
#     for i in list1:
#         if i.lower() == "jet":
#             jetcount += 1
#         elif i.lower() == "mat":
#             matcount += 1
#     if jetcount == matcount:
#         return True
#     else:
#         return False
    
        
# string="Jet on the Mat but mat is too long"
# print(check_occurence(string))

# # problem 27 - time:30secs
# def check_for_ten(num1,num2):
#     if num1 == 10 or num2 == 10:
#         return True
#     elif num1+num2 == 10:
#         return True
#     else:
#         return False
    
# print(check_for_ten(10,9))

# # problem 29 - time:4min

# def exchange_list(number_list):
#     temp1 = number_list[len(number_list)//2:]
#     temp1.reverse()
#     newList = temp1+number_list[:len(number_list)//2]


#     return newList
        
# number_list=[1,2,3,4,5,6]
# print(exchange_list(number_list))

# # problem 31 - time:6mins

# def sum_of_elements(num_list,number):
#     for i in range(len(num_list)):
#         if num_list[i] == number:
#             num_list[i] = 0
#             if i > 0:
#                 num_list[i-1] = 0
#             if i < len(num_list)-1:
#                 num_list[i+1] = 0
#     result_sum = sum(num_list)
#     return result_sum
        
# num_list=[1,7,3,4,1,7,10,5]
# number=7
# print(sum_of_elements(num_list, number))

# # lvl 2 problem 13 - time:8mins
# def close_number(num1,num2,num3):
#     list1 = [num1, num2, num3]
#     flag = False
#     for i in (range(len(list1))):
#         if abs(list1[i] - list1[i-1]) <= 1:
#             if abs(list1[i]-list1[i-2]) >= 2 and abs(list1[i-1]-list1[i-2]) >= 2:
#                 flag = True
#                 break

#     return flag
    
# print(close_number(5,4,2))

# # problem 16
# def rotate_list(input_list,n):
    
#     output_list = input_list[-n:]+input_list[:-n]
#     return output_list

# input_list= [1,2,3,4,5,6]
# output_list=rotate_list(input_list,4)
# print(output_list)

# # problem 21
# def check_numbers(num1,num2):
#     num_list = []
#     for i in range(num1, num2+1):
#         for j in range(num1, num2+1):
#             if i%j == 0 and i!=j:
#                 num_list.append(i)
#     out = set(num_list)
#     count = len(out)
    
#     return [out,count]

# num1=10
# num2=30
# print(check_numbers(num1, num2))

# # problem 32
# from math import sqrt
# def solve(n):
#     try:
#         sq_root = int(sqrt(n))
#         return (sq_root*sq_root) == n
#     except:
#         return False

# def check_squares(number):
#     flag = False
#     for i in range(number):
#         first = i*i
#         second = number - first
#         if solve(second):
#             flag  = True
#             break
#     return flag
# number=44
# print(check_squares(number))

# problem 33
def integer_to_english(number):
    ones = {
        "1":"one",
        "2":"two",
        "3":"three",
        "4":"four",
        "5":"five",
        "6":"six",
        "7":"seven",
        "8":"eight",
        "9":"nine",
    }

    tens = {
        "1":"ten",
        "2":"twenty",
        "3":"thirty",
        "4":"fourty",
        "5":"fifty",
        "6":"sixty",
        "7":"seventy",
        "8":"eighty",
        "9":"ninety",
    }

    specials = {
        "11":"eleven",
        "12":"twelve",
        "13":"thirteen",
        "14":"fourteen",
        "15":"fifteen",
        "16":"sixteen",
        "17":"seventeen",
        "18":"eightheen",
        "19":"nineteen",
    }

    numtostr = str(number)
    if len(numtostr) == 1:
        print(ones[numtostr])
    elif len(numtostr) == 2:
        if numtostr in specials.keys():
            print(specials[numtostr])
        else:
            print(tens[numtostr[0]], ones[numtostr[1]])
    elif len(numtostr) == 3:
        print(ones[numtostr[0]], "hundered and", tens[numtostr[1]], ones[numtostr[2]])
    elif number == 1000:
        print("one thousand")
    else:
        print(-1)


number=789
integer_to_english(number)