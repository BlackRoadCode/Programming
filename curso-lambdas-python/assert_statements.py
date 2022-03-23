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
        num = input("Ingresa un número: ")
        assert num.isnumeric(), "Debes ingresar un número"
        
        print(divisors(int(num)))
        print("Programa Finalizado.")

if __name__ == '__main__':
    run()
    
