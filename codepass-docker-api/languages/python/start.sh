#!/bin/sh

echo "Running start.sh"

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

echo "Running Tests"
python -m unittest test_main.py