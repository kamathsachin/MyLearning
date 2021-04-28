# Open the file
my_file = open("test.txt")

"""
Read will read the line and keep incrementing the cursor. Here as the 1st line is already read, the next 2 time we try to print, it will print blank lines
"""
# print(my_file.read())
# my_file.seek(0)  # Place the cursor position back to 0
# print(my_file.read())
# print(my_file.read())

# print(my_file.readline())  # Reads only the 1st line or one line
print(my_file.readlines())

my_file.close()