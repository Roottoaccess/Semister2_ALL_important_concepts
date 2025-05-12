#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define MAX_SIZE 100
#define MAX_VALUE 1000

// Function to generate random numbers
void generateRandomArray(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        arr[i] = rand() % MAX_VALUE;
    }
}

// Function to print array
void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");
}

// Counting Sort without pointers
void countingSort(int arr[], int size) {
    int max = arr[0];
    for (int i = 1; i < size; i++) {
        if (arr[i] > max) max = arr[i];
    }

    int count[10001] = {0};  // Assuming maximum value is 10000
    int output[10001];       // Temporary array for storing output

    // Store count of each element
    for (int i = 0; i < size; i++) {
        count[arr[i]]++;
    }

    // Modify count array to store actual position of elements
    for (int i = 1; i <= max; i++) {
        count[i] += count[i - 1];
    }

    // Build the output array
    for (int i = size - 1; i >= 0; i--) {
        output[count[arr[i]] - 1] = arr[i];
        count[arr[i]]--;
    }

    // Copy the output array to arr[]
    for (int i = 0; i < size; i++) {
        arr[i] = output[i];
    }
}

// Bubble Sort
void bubbleSort(int arr[], int size) {
    for (int i = 0; i < size - 1; i++) {
        for (int j = 0; j < size - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

// Selection Sort
void selectionSort(int arr[], int size) {
    for (int i = 0; i < size - 1; i++) {
        int min_idx = i;
        for (int j = i + 1; j < size; j++) {
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }
        int temp = arr[min_idx];
        arr[min_idx] = arr[i];
        arr[i] = temp;
    }
}

// Quick Sort helper function
int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int i = (low - 1);

    for (int j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    int temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    return (i + 1);
}

// Quick Sort
void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

// Merge Sort helper function
void merge(int arr[], int l, int m, int r) {
    int i, j, k;
    int n1 = m - l + 1;
    int n2 = r - m;

    int* L = (int*)malloc(n1 * sizeof(int));
    int* R = (int*)malloc(n2 * sizeof(int));

    for (i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];

    i = 0;
    j = 0;
    k = l;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }

    free(L);
    free(R);
}

// Merge Sort
void mergeSort(int arr[], int l, int r) {
    if (l < r) {
        int m = l + (r - l) / 2;
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
        merge(arr, l, m, r);
    }
}

// Insertion Sort
void insertionSort(int arr[], int size) {
    for (int i = 1; i < size; i++) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}

// Heap Sort helper functions
void heapify(int arr[], int n, int i) {
    int largest = i;
    int l = 2 * i + 1;
    int r = 2 * i + 2;

    if (l < n && arr[l] > arr[largest])
        largest = l;

    if (r < n && arr[r] > arr[largest])
        largest = r;

    if (largest != i) {
        int temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;
        heapify(arr, n, largest);
    }
}

// Heap Sort
void heapSort(int arr[], int n) {
    for (int i = n / 2 - 1; i >= 0; i--)
        heapify(arr, n, i);

    for (int i = n - 1; i > 0; i--) {
        int temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        heapify(arr, i, 0);
    }
}

int main() {
    int* arr = NULL;  // Dynamic array pointer
    int size;
    int choice;
    int input_method;

    printf("Enter the size of array: ");
    scanf("%d", &size);

    if (size <= 0) {
        printf("Invalid size! Please enter a positive number\n");
        return 1;
    }

    // Allocate memory for the array
    arr = (int*)malloc(size * sizeof(int));
    if (arr == NULL) {
        printf("Memory allocation failed!\n");
        return 1;
    }

    while (1) {
        printf("\nChoose input method:\n");
        printf("1. Enter array elements manually\n");
        printf("2. Generate random array\n");
        printf("3. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &input_method);

        if (input_method == 3) {
            free(arr);  // Free the allocated memory before exiting
            break;
        }

        if (input_method == 1) {
            printf("Enter %d array elements:\n", size);
            for (int i = 0; i < size; i++) {
                printf("Element %d: ", i + 1);
                scanf("%d", &arr[i]);
            }
            printf("Array input complete!\n");
            printf("Current array: ");
            printArray(arr, size);
        } else if (input_method == 2) {
            generateRandomArray(arr, size);
            printf("Generated array: ");
            printArray(arr, size);
        } else {
            printf("Invalid choice! Please try again.\n");
            continue;
        }

        while (1) {
            printf("\nSorting Algorithm Menu:\n");
            printf("1. Counting Sort\n");
            printf("2. Bubble Sort\n");
            printf("3. Selection Sort\n");
            printf("4. Quick Sort\n");
            printf("5. Merge Sort\n");
            printf("6. Insertion Sort\n");
            printf("7. Heap Sort\n");
            printf("8. Back to Input Method\n");
            printf("9. Exit\n");
            printf("Enter your choice: ");
            scanf("%d", &choice);

            if (choice == 9) {
                free(arr);  // Free the allocated memory before exiting
                return 0;
            }
            if (choice == 8) break;

            if (choice < 1 || choice > 8) {
                printf("Invalid choice! Please try again.\n");
                continue;
            }

            // Create a dynamic copy of the array for sorting
            int* temp_arr = (int*)malloc(size * sizeof(int));
            if (temp_arr == NULL) {
                printf("Memory allocation failed for temporary array!\n");
                free(arr);
                return 1;
            }

            // Copy the original array
            for (int i = 0; i < size; i++) {
                temp_arr[i] = arr[i];
            }

            printf("\nOriginal array: ");
            printArray(temp_arr, size);

            switch (choice) {
                case 1:
                    countingSort(temp_arr, size);
                    printf("After Counting Sort: ");
                    break;
                case 2:
                    bubbleSort(temp_arr, size);
                    printf("After Bubble Sort: ");
                    break;
                case 3:
                    selectionSort(temp_arr, size);
                    printf("After Selection Sort: ");
                    break;
                case 4:
                    quickSort(temp_arr, 0, size - 1);
                    printf("After Quick Sort: ");
                    break;
                case 5:
                    mergeSort(temp_arr, 0, size - 1);
                    printf("After Merge Sort: ");
                    break;
                case 6:
                    insertionSort(temp_arr, size);
                    printf("After Insertion Sort: ");
                    break;
                case 7:
                    heapSort(temp_arr, size);
                    printf("After Heap Sort: ");
                    break;
            }
            printArray(temp_arr, size);
            free(temp_arr);  // Free the temporary array after use
        }
    }

    return 0;
}