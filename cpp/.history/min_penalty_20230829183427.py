customers = ""
arr = [0 for i in range(len(customers))]
hours=[0 for i in range(len(customers))]

for i in range(len(customers)):
    for j in range(len(customers)):
        penalty=0
        for prev in range(0, j+1):
            if customers[prev]=="N":penalty+=