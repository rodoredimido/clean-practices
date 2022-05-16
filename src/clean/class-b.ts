// Aun no es de responsavilidad unica

(() => {
    type Gender = 'M' | 'F' 

    interface PersonProps {
        name: string
        gender: Gender
        birthDate: Date
    }

    class Person {
        public name: string
        public gender: Gender
        public birthDate: Date

        constructor({
            name,
            gender,
            birthDate
        }: PersonProps) {
            this.name = name
            this.birthDate = birthDate
            this.gender = gender
        }
    }

    interface UserProps {
        email: string
        role: string
        name: string
        gender: Gender
        birthDate: Date
    }

    class User extends Person {
        public lastAccess: Date
        public email: string
        public role: string

        constructor({
            email,
            role,
            name,
            gender,
            birthDate
        }: UserProps) {
            super({name, gender, birthDate})
            this.lastAccess = new Date()
            this.email = email
            this.role = role
        }
        
        checkCredentials() {
            return true
        }
    }

    interface UserSettingProps {
        workingDirectory: string
        lastOpenFolder: string
        email: string
        role: string
        name: string
        gender: Gender
        birthDate: Date
    }

    class UserSetting extends User {

        public workingDirectory: string
        public lastOpenFolder: string

        constructor({
            workingDirectory,
            lastOpenFolder,
            email,
            role,
            name,
            gender,
            birthDate,
        }: UserSettingProps) {
            super({email, role, name, gender, birthDate})
            this.workingDirectory = workingDirectory
            this.lastOpenFolder = lastOpenFolder
        }
    }

    const userSetting = new UserSetting({
        workingDirectory: '/usr/home',
        lastOpenFolder: '/home',
        email: 'rodolfo@rlc.com',
        role: 'Admin',
        name: 'Rodolfo',
        gender: 'M',
        birthDate: new Date('1986-11-13')
})
    console.log(userSetting)
})()