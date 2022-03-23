def run():
    # squares = []
    
    # for i in range(1,101):
    #     if i**2 % 3 != 0:
    #         squares.append(i**2)
    
    # squares = [i**2 for i in range(1, 101) if i % 3 != 0]
    # reto = [ i for i in range(1,10000) if i % 4 == 0 and i % 6 == 0 and i % 9 == 0 and i < 99999 ]
    
    reto = [i for i in range(1,201) if i % 2 != 0 and i % 3 != 0 and i % 5 != 0 and i%i == 0 ]
    
    # llaves = 100 primeros números naturales
    # valores = llave al cubo
    
    # print(squares)
    print(reto)

if __name__ == '__main__':
    run()