class User{
    constructor(username){
       this.username= username
    }

    logMe(){
        console.log(`username is ${this.username}`);        
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email=email
        this.password=password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const TeacherOne= new Teacher("Ayesha", "ayesha@gmail.com", "123abc")
console.log(TeacherOne)
TeacherOne.addCourse()

const UserOne= new User("Esha")
UserOne.logMe()
TeacherOne.logMe()
console.log(UserOne === TeacherOne)
console.log(UserOne instanceof Teacher)
console.log(TeacherOne instanceof User)