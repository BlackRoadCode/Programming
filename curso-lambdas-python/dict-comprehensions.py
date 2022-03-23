def run():
    
    # Solución con ciclo for
    
    # my_dict = {}
    
    # for i in range(1,101):
    #     if i%3 != 0:
    #         my_dict[i] = i**3
    # print(my_dict)
    
    # Solución con dictionary comprehensions
    reto = { i: i**3 for i in range(1,101) if i%3 != 0 }
    reto2 = { i: round(i**0.5, 2) for i in range(1,1001) }
    print(reto2)

if __name__ == '__main__':
    run()