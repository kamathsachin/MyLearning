from functools import reduce

# def multiply_by2(li):
#     new_list = []

#     for item in li:
#         new_list.append(item * 2)

#     return new_list


# print(multiply_by2([2, 4, 8]))
my_list = [3, 5, 6]
new_list = [9, 3, 4]
another_list = [2, 6, 8]
"""
Reduce
"""


def accumulator(acc, item):
    print(acc, item)
    return acc + item


### Map ###
""" 
This is a pure function.
Need to provide 2 parameters. The function to be called and the item that needs to go through the function
"""


def multiply_by2(item):
    return item * 2


### Filter ###
"""
This function is used to filter data based on filtering critera
"""


def odd_only(item):
    return item % 2 != 0


"""
Zip iterates through the iterables and combines them into one list
"""
print(reduce(accumulator, my_list, 2))
print(list(zip(my_list, new_list, another_list)))
print(list(map(multiply_by2, my_list)))
print(list(filter(odd_only, my_list)))

print(list(map(lambda item: item ** 2, [5, 4, 3])))

# Sorting the list based on the 2nd element in the tuple
a = [(0, 2), (4, 3), (9, 9), (10, -1)]
a.sort(key=lambda item: item[1])
print(a)
