
def run():
    
    from functools import reduce
    
    my_list = [1,2,3,4,5]
    
    all_multiplied = reduce( lambda a,b: a*b, my_list )
    print(all_multiplied)
    
    # palindrome = lambda string: string == string[::-1]
    
    # print(palindrome('ana'))
    # print(palindrome('anita lava la tina'))

if __name__ == '__main__':
    run()