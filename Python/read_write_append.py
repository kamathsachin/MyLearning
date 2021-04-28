# With Open --> It is not required to close the file explicity.
with open("test.txt", mode="a") as my_file:
    text = my_file.write("This is a test writeup")
    print(my_file.readlines())