class User{
    constructor(username){
       this.username= username
    }

    logMe(){
        console.log(`username is ${this.username}`);        
    }

    createId(){
        return `123`
    }

    static createID123(){
        return `456`
    }
    
}

const UserOne= new User("Ali")
console.log(UserOne.createId())

class Teacher extends User{
    constructor(username, email)
    {
        super(username)
        this.email=email
    }
}
const TeacherOne= new Teacher("Sehar", "sehar123@gmail.com")
console.log(TeacherOne)
TeacherOne.logMe()
//console.log(TeacherOne.createID123()); ==>error
