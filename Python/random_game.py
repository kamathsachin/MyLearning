# generate a number 1 - 10
from random import randint
import sys

answer = randint(int(sys.argv[1]), int(sys.argv[2]))

print(answer)


# input check that number is 1 - 10
while True:
    try:
        # take input from the user
        guess = input(f"Enter a number between {sys.argv[1]} - {sys.argv[2]}: ")

        if 0 < int(guess) < 11:
            if int(guess) == answer:
                print("You are correct!!!")
                break
            else:
                print("Incorrect Answer. Try Again")
                continue
    except ValueError:
        print("Please enter a valid number")
        continue

# input check to match the number
# else ask again
