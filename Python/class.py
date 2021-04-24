class PlayerCharacter:
    membership = True  # class attribute

    def __init__(self, name, age):
        if self.membership:
            self.name = name
            self.age = age

    def shout(self):
        print(f"My name is {self.name}")

    @classmethod
    def adding_things(cls, num1, num2):
        return num1 + num2


player1 = PlayerCharacter("Cindy", 18)
player1.shout()

player2 = PlayerCharacter.adding_things(2, 6)
print(player2)
