#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define STEPS 10
#define STEP_SIZE 10

void DistributionCountingSort(int A[], int n, int l, int u, int S[]);

int main() {
    srand(time(NULL));
    int l = 1, u = 10;

    FILE* fp = fopen("output_large.csv", "w");  // Fixed quotes

    if (!fp) {
        perror("File creation failed");
        return 1;
    }

    fprintf(fp, "InputSize, TimeMicroseconds\n");

    fclose(fp);  // Always close files

    for(int i = 1; i <= STEPS; i++){
        int n = i * STEP_SIZE;
        int* A = (int*) malloc(n * sizeof(int));
        int* S = (int*) malloc(n * sizeof(int));
        if (!A || !S){
            printf("Memory allocation failed at input size %d\n", n);
            break;
        }
    }
    return 0;
}

void DistributionCountingSort(int A[], int n, int l, int u, int S[]) {
    int range = u - l + 1;
    int* D = (int *) calloc(range, sizeof(int));

    for (int j = 0; j < range; j++) {
        D[j] = 0;
    }

    for (int i = 0; i < n; i++) {
        D[A[i] - l]++;
    }

    for (int j = 1; j < range; j++) {
        D[j] += D[j - 1];
    }

    for (int i = n - 1; i >= 0; i--) {
        S[D[A[i] - l] - 1] = A[i];
        D[A[i] - l]--;
    }

    free(D);
}
