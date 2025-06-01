# This is the code for applying the linear searching algorithm in the python script....
l = []; lmt = int(input("Enter the limit of the array: "))
for i in range(lmt):
    val = int(input("Value: "))
    l.append(val) # Appending the value to the empty list
print(f'Actual List: {l}')
# Applying the algo for for searching the key....
key = int(input("Enter the key: "))
count = 0 # This is the counter variable....
for i in l:
    count += 1
    if i == key: # checking the condition
        print(f'Element found in {count} position')
    else:
        pass
