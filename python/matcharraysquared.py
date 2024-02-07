# Write a function that takes in 2 arrays and returns true if each value in the first array is equivalent to itself squared in the second array
# Examples
# input: [1, 2, 3], [1, 9, 4]
# output: true

#input: [1, 2, 3], [1, 2, 4]
#output: false

def match_array_squared(list1, list2):
    counts = {}
    for num in list2:
        if num in counts:
            counts[num] = counts[num] + 1
        else:
            counts[num] = 1
    for num in list1:
        squared = num * num
        if squared in counts:
            counts[squared] -= 1
        else:
            return False
        

    return True

inputa = [1, 2, 3]
inputb = [1, 9, 4]
inputc = [1, 2, 4]
inputd = [1, 1, 4]
inpute = [1, 1, 2]

print(match_array_squared(inputa, inputb))
print(match_array_squared(inputa, inputc))
print(match_array_squared(inputa, inputd))
print(match_array_squared(inputd, inputb))