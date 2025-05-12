import random

def generate_random_array(size, min_val=0, max_val=1000):
    """Generate an array of random numbers"""
    return [random.randint(min_val, max_val) for _ in range(size)]

def print_array(arr):
    """Print array elements"""
    print(' '.join(map(str, arr)))

# Counting Sort
def counting_sort(arr):
    if not arr:
        return arr
    
    # Find maximum element
    max_element = max(arr)
    
    # Create count array
    count = [0] * (max_element + 1)
    
    # Store count of each element
    for i in arr:
        count[i] += 1
    
    # Modify count array to store actual positions
    for i in range(1, len(count)):
        count[i] += count[i - 1]
    
    # Create output array
    output = [0] * len(arr)
    
    # Build output array
    for i in range(len(arr) - 1, -1, -1):
        output[count[arr[i]] - 1] = arr[i]
        count[arr[i]] -= 1
    
    # Copy output array to arr
    for i in range(len(arr)):
        arr[i] = output[i]

# Bubble Sort
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]

# Selection Sort
def selection_sort(arr):
    n = len(arr)
    for i in range(n):
        min_idx = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]

# Quick Sort
def quick_sort(arr, low, high):
    def partition(low, high):
        pivot = arr[high]
        i = low - 1
        
        for j in range(low, high):
            if arr[j] <= pivot:
                i += 1
                arr[i], arr[j] = arr[j], arr[i]
        
        arr[i + 1], arr[high] = arr[high], arr[i + 1]
        return i + 1
    
    if low < high:
        pi = partition(low, high)
        quick_sort(arr, low, pi - 1)
        quick_sort(arr, pi + 1, high)

# Merge Sort
def merge_sort(arr):
    if len(arr) > 1:
        mid = len(arr) // 2
        L = arr[:mid]
        R = arr[mid:]

        merge_sort(L)
        merge_sort(R)

        i = j = k = 0

        while i < len(L) and j < len(R):
            if L[i] <= R[j]:
                arr[k] = L[i]
                i += 1
            else:
                arr[k] = R[j]
                j += 1
            k += 1

        while i < len(L):
            arr[k] = L[i]
            i += 1
            k += 1

        while j < len(R):
            arr[k] = R[j]
            j += 1
            k += 1

# Insertion Sort
def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key

# Heap Sort
def heap_sort(arr):
    def heapify(n, i):
        largest = i
        l = 2 * i + 1
        r = 2 * i + 2

        if l < n and arr[l] > arr[largest]:
            largest = l

        if r < n and arr[r] > arr[largest]:
            largest = r

        if largest != i:
            arr[i], arr[largest] = arr[largest], arr[i]
            heapify(n, largest)

    n = len(arr)

    for i in range(n // 2 - 1, -1, -1):
        heapify(n, i)

    for i in range(n - 1, 0, -1):
        arr[0], arr[i] = arr[i], arr[0]
        heapify(i, 0)

def get_user_input_array(size):
    """Get array elements from user input"""
    arr = []
    print(f"\nEnter {size} elements:")
    for i in range(size):
        while True:
            try:
                element = int(input(f"Element {i + 1}: "))
                arr.append(element)
                break
            except ValueError:
                print("Please enter a valid integer!")
    return arr

def main():
    while True:
        print("\nSorting Algorithm Menu:")
        print("1. Counting Sort")
        print("2. Bubble Sort")
        print("3. Selection Sort")
        print("4. Quick Sort")
        print("5. Merge Sort")
        print("6. Insertion Sort")
        print("7. Heap Sort")
        print("8. Exit")
        
        choice = input("Enter your choice (1-8): ")
        
        if choice == '8':
            print("Exiting program...")
            break
            
        try:
            size = int(input("Enter the size of array: "))
            if size <= 0:
                print("Please enter a positive number!")
                continue
            
            # Ask user for input method
            print("\nChoose input method:")
            print("1. Enter elements manually")
            print("2. Generate random array")
            input_method = input("Enter your choice (1-2): ")
            
            # Get array based on input method
            if input_method == '1':
                arr = get_user_input_array(size)
            elif input_method == '2':
                arr = generate_random_array(size)
            else:
                print("Invalid input method! Please try again.")
                continue
            
            print("\nOriginal array:")
            print_array(arr)
            
            # Create a copy for sorting
            arr_copy = arr.copy()
            
            # Apply selected sorting algorithm
            if choice == '1':
                counting_sort(arr_copy)
                print("\nAfter Counting Sort:")
            elif choice == '2':
                bubble_sort(arr_copy)
                print("\nAfter Bubble Sort:")
            elif choice == '3':
                selection_sort(arr_copy)
                print("\nAfter Selection Sort:")
            elif choice == '4':
                quick_sort(arr_copy, 0, len(arr_copy) - 1)
                print("\nAfter Quick Sort:")
            elif choice == '5':
                merge_sort(arr_copy)
                print("\nAfter Merge Sort:")
            elif choice == '6':
                insertion_sort(arr_copy)
                print("\nAfter Insertion Sort:")
            elif choice == '7':
                heap_sort(arr_copy)
                print("\nAfter Heap Sort:")
            else:
                print("Invalid choice! Please select a number between 1 and 8.")
                continue
                
            print_array(arr_copy)
            
        except ValueError:
            print("Please enter valid numbers!")
            continue

if __name__ == "__main__":
    main()