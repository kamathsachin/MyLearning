import unittest
import main_to_test


class TestMain(unittest.TestCase):
    def setUp(self):
        print("Getting Ready!!!")

    def test_do_stuff(self):
        test_param = 10
        result = main_to_test.do_stuff(test_param)
        self.assertEqual(result, 15)

    def test_do_stuff2(self):
        test_param = "gfhfghghg"
        result = main_to_test.do_stuff(test_param)
        self.assertTrue(isinstance(result, ValueError))

    def test_do_stuff3(self):
        test_param = None
        result = main_to_test.do_stuff(test_param)
        self.assertEqual(result, "Please enter valid number")


if __name__ == "__main__":
    unittest.main()