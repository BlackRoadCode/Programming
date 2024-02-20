
interface BuildMakePersonOptions{
    getUUID: () => string;
    getAge: ( birthdate:string ) => number;
}

interface PersonOptions{
    name:string;
    birthdate:string;
}

export const buildMakePerson = ({ getAge, getUUID }:BuildMakePersonOptions) => {
    return ({ name, birthdate }:PersonOptions) => {
        return {
            id: getUUID(),
            name: name,
            birthdate: birthdate,
            age: getAge(birthdate)
        }
    }
}
