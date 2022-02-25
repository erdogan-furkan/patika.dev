# sample input: [[1,'a',['cat'],2],[[[3]],'dog'],4,5]
# sample output: [1,'a','cat',2,3,'dog',4,5]
def flatten(l, l2=[]):
    for i in l:
        t = type(i)
        if (t==list or t==tuple or t==dict or t==set):
            flatten(i, l2)
        else:
            l2.append(i)
    return l2

# sample input: [[1, 2], [3, 4], [5, 6, 7]]
# sample output: [[[7, 6, 5], [4, 3], [2, 1]]
def reverse(l):
    l.reverse()
    for i in l:
        t = type(i)
        if (t==list):
            reverse(i)
    return l