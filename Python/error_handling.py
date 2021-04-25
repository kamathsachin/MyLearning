while True:
    try:
        age = int(input("Enter your age: "))
    except ValueError:
        print("Enter a number")
    except ZeroDivisionError:
        print("Enter age higher than 0")
    else:
        print("Thank you!!!")
        break
