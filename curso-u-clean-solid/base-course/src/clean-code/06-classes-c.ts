(() => {

    // Aplicando el principio de responsabilidad única
    // Priorizar la composición frente a la herencia

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
        email: string;
        role: string;
    }

    class User {

        public email: string;
        public lastAcces: Date;
        public role: string;

        constructor( { email, role }:UserProps ) {
                this.lastAcces = new Date();
                this.email = email;
                this.role = role;
        }
        
        checkCredentials():boolean{
            return true;
        }
    }

    interface SettingsProps{
        lastOpenFolder: string;
        workingDirectory: string;
    }

    class Settings {

        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor( { lastOpenFolder, workingDirectory }: SettingsProps ){
            this.lastOpenFolder = lastOpenFolder;
            this.workingDirectory = workingDirectory;
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

    class UserSettings{

        public person: Person;
        public user: User;
        public settings: Settings;

        constructor( { birthdate, gender, name, email, role, lastOpenFolder, workingDirectory }:UserSettingsProps ){
            this.person = new Person( { birthdate, gender, name } );
            this.user = new User({ email, role });
            this.settings = new Settings({ lastOpenFolder, workingDirectory });
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