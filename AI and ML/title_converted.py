# This is the script for downloaing the altered csv file from the new csv file
import pandas as pd

# Read the Excel file
df = pd.read_excel('Category-Data-4-Jai-kumar.xlsx', header=None)

# Define the correct column titles
correct_titles = ['ProductID', 'Title', 'Selling Price', 'MRP', 'Discount', 'Rating', 'Rating Count', 'Category', 'Platform']

# Replace the header at row 1000 (index 999)
df.iloc[999] = correct_titles

# Save as CSV
df.to_csv('Corrected-Category-Data.csv', index=False, header=False)
