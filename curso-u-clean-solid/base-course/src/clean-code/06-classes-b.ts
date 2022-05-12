(() => {
    type Gender = 'M' | 'F';

    interface PersonProps {
        birthdate: Date;
        gender: Gender;
        name:string;
    }

    class Person {
        public birthdate:Date;
        public gender:Gender;
        public name:string;

        constructor( { name ,gender, birthdate }:PersonProps ) {
            this.birthdate = birthdate;
            this.gender = gender;
            this.name = name;
        }
    }

    interface UserProps{
        birthdate: Date;
        email: string;
        gender: Gender;
        name: string;
        role: string;
    }

    class User extends Person {

        public email: string;
        public role: string;
        public lastAcces: Date;

        constructor( { birthdate, email, gender, name, role,}:UserProps ) {

                super( { gender, name, birthdate } );

                this.lastAcces = new Date();
                this.email = email;
                this.role = role;
        }
        
        checkCredentials():boolean{
            return true;
        }
    }

    interface UserSettingsProps{
        birthdate: Date;
        gender: Gender;
        name: string;
        
        email: string;
        role: string;
        
        lastOpenFolder: string;
        workingDirectory: string;
    }

    class UserSettings extends User {

        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor( { birthdate, gender, name, email, role, lastOpenFolder, workingDirectory }:UserSettingsProps ){
            super( { email, role, name, gender, birthdate } );
            this.lastOpenFolder = lastOpenFolder;
            this.workingDirectory = workingDirectory;
        }
    }

    const userSettings = new UserSettings(
        {
            birthdate: new Date('1982-12-24'),
            email: 'pepesosa@gmail.com',
            gender: 'M',
            lastOpenFolder: '/home',
            name: 'Fernando',
            role: 'Admin',
            workingDirectory: '/usr/home'
        }
    )

    console.log({ userSettings });
    
})();