# criba de Eratóstenes
def criba_eratostenes( numero_inicial ):
    iterador = 2
    for cifra in range( 2, numero_inicial + 1):
        if cifra % 2 == 0:
            continue    
        if cifra**2 > numero_inicial:
            continue
        iterador += 1
        print(cifra)

def run():
    numero = int( input('Ingresa el número: ') )
    criba_eratostenes(numero)


if __name__ == '__main__':
    run()