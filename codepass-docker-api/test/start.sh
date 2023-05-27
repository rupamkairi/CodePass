#!/bin/sh

echo "Running start.sh"

SOURCE="https://pub-942b0c9bdd904667b74d31f3047b9731.r2.dev/users/1/main.py"
TEST="https://pub-942b0c9bdd904667b74d31f3047b9731.r2.dev/test_main.py"

echo "Variables"
echo SOURCE $SOURCE
echo TEST $TEST

echo "Working directory"
pwd

echo "Downloading..."
wget $SOURCE -O main.py
wget $TEST -O test_main.py

echo "Files"
ls -al .

# echo "Running Tests"
# python -m unittest