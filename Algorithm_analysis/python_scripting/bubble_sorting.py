# This is the script for executing the bubble sorting technique
l = []; lmt = int(input("Enter the limit of the list: ")) # Creating an empty list and taking the limit as output from the user
# Appending the values to the list
for i in range(lmt):
    val = int(input("Value: "))
    l.append(val)
print(f'List before sorting: {l}') # Uses the formating string and showing the result
l_l = len(l)
# Applying the logic of bubble sorting
for i in range(l_l - 1):
    for j in range(l_l - 1 -i):
        if l[j + 1] < l[j]:
            # Swapping_the_value
            l[j + 1], l[j] = l[j], l[j + 1]
# Printing the list after sorting....
print(f'List after sorting: {l}')