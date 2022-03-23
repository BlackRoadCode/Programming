def run():
    nombre = input('Escribe tu nombre: ')
    print( 'Tu nombre tiene ' + str(len( nombre )) + ' caracteres.' )
    print('\n')
    for letra in nombre:
        print(letra)


if __name__ == '__main__':
    run()