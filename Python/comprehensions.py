# list comprehensions

my_list = [char for char in "hello"]
my_list2 = [num for num in range(0, 50)]
my_list3 = [num ** 2 for num in range(0, 50)]
my_list4 = [num ** 2 for num in range(0, 50) if num % 2 == 0]


print(my_list)
print(my_list2)
print(my_list3)
print(my_list4)

# set comprehensions
my_list = {char for char in "hello"}
my_list2 = {num for num in range(0, 50)}
my_list3 = {num ** 2 for num in range(0, 50)}
my_list4 = {num ** 2 for num in range(0, 50) if num % 2 == 0}


print(my_list)
print(my_list2)
print(my_list3)
print(my_list4)

# dictionary comprehensions

my_dict = {"a": 1, "b": 2}

output_dict = {key: value * 2 for key, value in my_dict.items() if value * 2 > 3}
print(output_dict)

some_list = ["a", "b", "c", "d", "b", "m", "n", "n"]

duplicates = {num for num in some_list if some_list.count(num) > 1}
print(duplicates)