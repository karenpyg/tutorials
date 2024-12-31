path = "/a/./b/../../c/"
def ss(up):
    a = up.split('/')
    print(a)
    if len(a)==0:return '/'
    stack = list()
    for i in range(len(a)):
        if a[i] == '..':
            stack.pop()
        elif a[i] !='.' and a[i] !='':
            stack.append(a[i])
        else: 
            pass 
    aa = ''
    for i in stack: aa+= f'/{i}'
    print(aa)
        
print(ss(''))