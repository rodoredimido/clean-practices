(() => {
    type Gender = 'M' | 'F' 
    class Person {

        constructor(
            public name: string,
            public gender: Gender,
            public birthDate: Date
        ) {}
    }

    class User extends Person {
        public lastAccess: Date
        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthDate: Date
        ) {
            super(name, gender, birthDate)
            this.lastAccess = new Date()
        }
        
        checkCredentials() {
            return true
        }
    }

    class UserSetting extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthDate: Date,
        ) {
            super(email, role, name, gender, birthDate)
        }
    }
    const userSetting = new UserSetting(
        '/usr/home',
        '/home',
        'rodolfo@rlc.com',
        'Admin',
        'Rodolfo',
        'M',
        new Date('1986-11-13')
    )
    console.log(userSetting)
})()