# This is the python script for performing the selection sorting technique
l = []; lmt = int(input("Enter the limit of the list: ")) # Creating an empty list and taking the limit as output from the user
# Appending the values to the list
for i in range(lmt):
    val = int(input("Value: "))
    l.append(val)
print(f'List before sorting: {l}') # Uses the formating string and showing the result
l_l = len(l) # Taking the length of the actual list
# Applying the logic of selection sort....
for i in range(l_l - 1):
    min = i # Considering the minimum value as the first index
    for j in range(i + 1 , l_l):
        if l[j] < l[min]: # This is the index
            min = j # Considering l[j] the second index as the sortest one.... (This is the element) 
    if min != i:
        # Swapping the value
        l[i], l[min] = l[min], l[i]

# Print the actual result after sorting
print(f'list after sorting: {l}')