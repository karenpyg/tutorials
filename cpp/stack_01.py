def ss(p_string):
    stack=list()
    if len(p_string)%2 != 0:return False
    d = {')':'(',']':'[', '}':'{'}
    for i in range(len(p_string)):
        if p_string[i] in ['(','{', '[']:
            stack.append(p_string[i])

        if p_string[i] in d.keys(): 
            if len(stack)==0:return False

            if stack[-1] == d[p_string[i]]: stack.pop()
            else: return False 
    if len(stack) == 0:return True 
    return False       

def second_solution(s):
    stack = [] # create an empty stack to store opening brackets
    for c in s: # loop through each character in the string
        if c in '([{': # if the character is an opening bracket
            stack.append(c) # push it onto the stack
        else: # if the character is a closing bracket
            if not stack or \
                (c == ')' and stack[-1] != '(') or \
                (c == '}' and stack[-1] != '{') or \
                (c == ']' and stack[-1] != '['):
                return False # the string is not valid, so return false
            stack.pop() # otherwise, pop the opening bracket from the stack
    return not stack # if the stack is empty, all opening brackets have been matched with their corresponding closing brackets,
                