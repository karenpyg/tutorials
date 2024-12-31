customers = "YYNY"
arr = [0 for i in range(len(customers))]
hours=[0 for i in range(len(customers))]
print(hours)
for i in range(len(customers)):
    for j in range(len(customers)):
        m= -1
        # print('====================')
        penalty=0
        for prev in range(0, j):
            if customers[prev]=="N":penalty+=1
            # print(penalty,'NNNNNNNNNNnn')
            # print(customers[0:j])
        for post in range(j, len(customers)):
            if customers[post]=="Y": penalty+=1
            # print(penalty,'yyyyyyyyyfyyyy')
        if penalty>m: m=penalty
        print(penalty)
    hours[i]=m
        
print(hours)