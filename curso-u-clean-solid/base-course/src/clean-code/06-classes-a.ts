(() => {
    type Gender = 'M' | 'F';

    class Person {
        constructor(
            public name: string,
            public gender: Gender,
            public birthdate: Date
        ) { }
    }

    class User extends Person {

        public lastAcces: Date;

        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthdate: Date
        ) {
            super(name, gender, birthdate);
            this.lastAcces = new Date();
        }
        
        checkCredentials():boolean{
            return true;
        }
    }

    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthdate: Date
        ){

            super( email, role, name, gender, birthdate );

        }
    }

    const userSettings = new UserSettings (
        '/usr/home',
        '/home',
        'pepesosa@gmail.com',
        'Admin',
        'Fernando',
        'M',
        new Date('1982-12-24')
    )

    // console.log({ userSettings, areCredentialsValid: userSettings.checkCredentials() });
    console.log({ userSettings });
    
})();