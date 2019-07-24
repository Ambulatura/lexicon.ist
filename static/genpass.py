import random


def pass_generator(length, is_big, is_small, is_number, is_special):
    all_characters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz", "0123456789", "!?$%&/*+-@\_.~"]
    characters = ""
    password = ""
    if is_big:
        big_letters = list(all_characters[0])
        random.shuffle(big_letters)
        characters += "".join(big_letters)
    if is_small:
        small_letters = list(all_characters[1])
        random.shuffle(small_letters)
        characters += "".join(small_letters)
    if is_number:
        numbers = list(all_characters[2])
        random.shuffle(numbers)
        characters += "".join(numbers)
    if is_special:
        specials = list(all_characters[3])
        random.shuffle(specials)
        characters += "".join(specials)
    characters = list(characters)
    while len(password) < length:
        random.shuffle(characters)
        password += random.choice(characters)
    return password
