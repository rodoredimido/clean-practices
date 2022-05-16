// Aplicando a Responsavilidade unica 
// Priorizar a composiçao na frente da herança!!!

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
    }

    class User{
        public lastAccess: Date
        public email: string
        public role: string

        constructor({
            email,
            role,
        }: UserProps) {
            this.lastAccess = new Date()
            this.email = email
            this.role = role
        }
        
        checkCredentials() {
            return true
        }
    }

    interface SettingProps {
        workingDirectory: string
        lastOpenFolder: string
    }

    class Setting {

        public workingDirectory: string
        public lastOpenFolder: string

        constructor({
            workingDirectory,
            lastOpenFolder,
        }: SettingProps) {
            this.workingDirectory = workingDirectory
            this.lastOpenFolder = lastOpenFolder
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

    class UserSetting {
        public person: Person
        public user: User
        public setting: Setting

        constructor({
            birthDate,
            email,
            gender,
            lastOpenFolder,
            name,
            role,
            workingDirectory
        }: UserSettingProps) {
            this.person = new Person({name, gender, birthDate})
            this.user = new User({email, role})
            this.setting = new Setting({lastOpenFolder, workingDirectory})
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