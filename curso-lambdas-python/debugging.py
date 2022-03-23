def divisors(num):
    try:
        if num <= 0:
            raise ValueError('Solo ingresar números positivos.')
        divisors = []
        for i in range(1, num + 1 ):
            if num % i == 0:
                divisors.append(i)
        return divisors
    except ValueError as ve:
        print(ve)
        return 0

def run():
    try:
        num = int( input("Ingresa un número: ") )
        print(divisors(num))
        print("Programa Finalizado.")
    except ValueError:
        print("Favor de ingresar un número")

if __name__ == '__main__':
    run()