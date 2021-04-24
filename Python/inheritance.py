class User:
    def __init__(self, email):
        print(email)

    def sign_in(self):
        print("Logged In")


class Archer(User):
    def __init__(self, name, num_arrows):
        self.name = name
        self.num_arrows = num_arrows

    def attack(self):
        print(f"Archer's Name is {self.name} and he has {self.num_arrows} arrows left")


class Wizard(User):
    def __init__(self, name, power, email):
        super().__init__(email)
        self.name = name
        self.power = power

    def attack(self):
        print(f"Wizard's Name is {self.name} and he has {self.power} powerleft")


Wizard1 = Wizard("Wizard Of Oz", 50, "wizard@oz.com")
Wizard1.attack()

Archer1 = Archer("Archer Tribhuvan", 3)
Archer1.attack()
