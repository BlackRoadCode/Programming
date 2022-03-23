def conversor( pais_convertir, valor_dolar ):    
    pesos = float( input('Ingresar el valor en pesos '+ pais_convertir +': ') );
    dolares = str( round( (pesos / valor_dolar), 2 ) );
    print("Tú tienes : " + dolares + " dólares" );

menu = """
Bienvenido al conversor de monedas 💹
1 - Pesos Mexicanos
2 - Pesos Colombianos
3 - Pesos Argentinos

Elige una opción: """

opcion = input( menu )

print('-------------------------------------------------')

if opcion == '1':
    conversor('Mexicanos', 20.10)
elif opcion == '2':
    conversor('Colombianos', 3875)
elif opcion == '3':
    conversor('Argentinos', 100.07)
else:
    print('Favor de ingresar una opción válida.')


# usd_dolares = float( input('Ahora ingresa el valor en dólares: ') );
# mxn_pesos = str( round( (usd_dolares * valor_dolar), 2 ) );
# print("Tú tienes : " + mxn_pesos + " pesos" );