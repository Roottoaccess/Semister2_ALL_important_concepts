# Creating the logic of caiser cipher tecnique......

# Required for the encryption and the decryption
"""
a b c d e f g h i j  k  l  m  n  o  p  q  r  s  t  u  v  w  x  y  z
0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25
"""
algorithm = {
    "a": 0,
    "b": 1,
    "c": 2,
    "d": 3,
    "e": 4,
    "f": 5,
    "g": 6,
    "h": 7,
    "i": 8,
    "j": 9,
    "k": 10,
    "l": 11,
    "m": 12,
    "n": 13,
    "o": 14,
    "p": 15,
    "q": 16,
    "r": 17,
    "s": 18,
    "t": 19,
    "u": 20,
    "v": 21,
    "w": 22,
    "x": 23,
    "y": 24,
    "z": 25
}
reverse_algorithm = {v: k for k, v in algorithm.items()}
print(reverse_algorithm)
# Taking the input from the user
user_input = input("Enter the plain text: ").lower()

print("Encrypted Message\n")
for i in user_input:
    if i in algorithm:
        cipher = (algorithm[i] + 3)
        cipher_char = reverse_algorithm[cipher]
        print(f"{cipher_char}", end="")
        

