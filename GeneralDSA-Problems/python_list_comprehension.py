_x = [x**2 for x in range(1, 11) if x % 2 == 0]
print(_x)
word_list = ['cat','dog','rabbit']
# letter_list = {a_letter for a_word in word_list for a_letter in a_word}
letter_list = [a_letter for a_word in word_list for a_letter in a_word]
for a_word in word_list:
    for a_letter in a_word:

        letter_list.append(a_letter)
print(letter_list)
