def run():
    # Ejempo de continue
    print('Ejemplo de continue:')
    for contador in range(50):
        if contador % 2 != 0:
            continue
        print(contador)
    
    print('\n')
    
    # Ejemplo de break
    print('Ejemplo de break:')
    for i in range (0, 50):
        print(i)
        if i == 15:
            break    
    
    print('\n')
    
    # aquí el reto:
    LIMITE = 100
    j = 1
    
    while j < LIMITE:
        if j % 2 == 0:
            print( 'Éste número es par: ' + str(j) )
            if j == 22:
                break
        j += 1


if __name__ == '__main__':
    run()