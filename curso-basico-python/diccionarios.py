def run():    
    mi_diccionario = {
        'llave1':1,
        'llave2':2.5,
        'llave3':'string',
        'llave4':True,
    }
    
    print(mi_diccionario)
    
    poblacion_paises = {
        'Argentina': 44_938_712,
        'Brasil': 210_147_125,
        'Colombia': 50_372_424
    }
    
    for pais in poblacion_paises.keys():
        print(pais)
    
    for pais in poblacion_paises.values():
        print(pais)
    
    for pais, poblacion in poblacion_paises.items():
        print("El país " + pais + ' tiene ' + str(poblacion) + ' pobladores')


if __name__ == '__main__':
    run()