# Write a function that takes in a string and returns an object with the counts of each character
# Sample input "Hello there";
# Smaple output {"h": 2, "e": 3, "l": 2, "o": 1, "t": 1, "h": 1, "e": 2, "r", 1}
# ignore spaces and count uppercase values as lowercase values
import re

def char_counts(string):
    counts = {}
    for char in string:
        char = char.lower()
        if (bool(re.match('[a-z0-9]', char))):
            if (char in counts):
                counts[char] += 1
            else:
                counts[char] = 1

    return counts

print(char_counts("hello there"))