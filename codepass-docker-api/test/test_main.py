import unittest
from main import solution


class TestSolution(unittest.TestCase):
    def test_cases(self):
        self.assertEqual(solution("Rupam"), "Hello Rupam")


if __name__ == "__main__":
    unittest.main()
