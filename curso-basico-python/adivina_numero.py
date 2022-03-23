import random

def run():
    intentos = 1
    numero_aleatorio = random.randint(1, 100)
    numero_elegido = int(input('Elige un número del 1 al 100: '))
    
    while numero_elegido != numero_aleatorio:
        if numero_elegido < numero_aleatorio:
            print('Busca un número más grande')
            intentos += 1
        else:
            print('Busca un número más pequeño')
            intentos += 1
        numero_elegido = int(input('Elige otro número: '))
    print('¡Ganaste en solo '+ str(intentos) +' intentos!')
    


if __name__ == '__main__':
    run()