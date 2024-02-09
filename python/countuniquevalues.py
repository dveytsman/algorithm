# Implement a function that takes in a sorted list and returns a count of
# the unique values in the array.

def count_unique_values(list):
    lastSeen = ""
    count = 0
    if len(list) == 0:
        return 0
    for value in list:
        if lastSeen != value:
            count += 1
            lastSeen = value
    return count


print(count_unique_values([1, 1, 3, 4, 5, 5, 19])); # => 5
print(count_unique_values([1, 1, 1, 1, 1])); # => 1
print(count_unique_values([])); # => 0