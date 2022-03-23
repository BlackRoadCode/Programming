def run():
    my_list = [1, "hello", True, 4.5]
    my_dict = { "firstname": "Pepe", "lastname": "Sosa"}
    
    # Lista que contiene diccionarios
    super_list = [
        { "firstname": "Pepe", "lastname": "Sosa"},
        { "firstname": "Miguel", "lastname": "Torres"},
        { "firstname": "Facundo", "lastname": "García"},
        { "firstname": "Susana", "lastname": "Martínez"}
    ]

    # Diccionario de listas
    super_dict = {
        "natural_nums": [1,2,3,4,5],
        "integer_nums": [-1, -2, 0, 1, 2],
        "floating_nums": [1.1, 6.43, 4.5]
    }
    
    for key, value in super_dict.items():
        print(key, "-", value)
    print("-------------------------------")
    for lst_key in super_list:
        print(lst_key)

if __name__ == '__main__':
    run()