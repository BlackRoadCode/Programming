DATA = [
    {
        'name': 'Facundo',
        'age': 72,
        'organization': 'Platzi',
        'position': 'Technical Coach',
        'language': 'python',
    },
    {
        'name': 'Luisana',
        'age': 33,
        'organization': 'Globant',
        'position': 'UX Designer',
        'language': 'javascript',
    },
    {
        'name': 'Héctor',
        'age': 19,
        'organization': 'Platzi',
        'position': 'Associate',
        'language': 'ruby',
    },
    {
        'name': 'Gabriel',
        'age': 20,
        'organization': 'Platzi',
        'position': 'Associate',
        'language': 'javascript',
    },
    {
        'name': 'Isabella',
        'age': 30,
        'organization': 'Platzi',
        'position': 'QA Manager',
        'language': 'java',
    },
    {
        'name': 'Karo',
        'age': 23,
        'organization': 'Everis',
        'position': 'Backend Developer',
        'language': 'python',
    },
    {
        'name': 'Ariel',
        'age': 32,
        'organization': 'Rappi',
        'position': 'Support',
        'language': '',
    },
    {
        'name': 'Juan',
        'age': 17,
        'organization': '',
        'position': 'Student',
        'language': 'go',
    },
    {
        'name': 'Pablo',
        'age': 32,
        'organization': 'Master',
        'position': 'Human Resources Manager',
        'language': 'python',
    },
    {
        'name': 'Lorena',
        'age': 56,
        'organization': 'Python Organization',
        'position': 'Language Maker',
        'language': 'python',
    },
]

def run():
    all_python_devs = [ person['name'] for person in DATA if person['language'] == 'python' ]
    all_platzi_workers = [ person['name'] for person in DATA if person['organization'] == 'Platzi' ]
    
    # Con list comprehension
    # all_adults = [ person['name'] for person in DATA if person['age'] > 18 ]
    
    # Con filter
    all_adults = list( filter( lambda worker: worker["age"] > 18, DATA ) )
    # all_adults = list( map( lambda worker: worker["name"], all_adults ) )
    
    # Para Python versión mayor a 3.5 y menor a 3.9
    old_people = list( map( lambda worker: {**worker, **{"old": worker["age"] > 70}}, DATA ) )
    
    # Para versión 3.9+
    # old_people = list( map( lambda worker: worker | {"old": worker["age"] > 70}, DATA ) )
    
    
    for people in old_people:
        print(people)
    
    # for name in all_python_devs:
    #     print(name)
    # for namep in all_platzi_workers:
    #     print(namep)

if __name__ == '__main__':
    run()