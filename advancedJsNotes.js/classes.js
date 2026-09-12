//ES6

class User{
    constructor(username, email, password){
        this.username=username
        this.email=email
        this.password=password
    }

    encryptPassword(){
        return `${this.password}123`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const UserOne= new User("Anas", "anas@gmail.com", "abcdef")
console.log(UserOne)
console.log(UserOne.encryptPassword())
console.log(UserOne.changeUsername())

//behind the scene

function user(username, email, password){
    this.username=username
    this.email=email
    this.password=password
}
user.prototype.encryptPassword= function(){
    return `${this.password}123`
}
user.prototype.changeUsername= function(){
    return `${this.username.toUpperCase()}`
}
const UserTwo= new User("Areeba", "areeba@gmail.com", "hijklm")
console.log(UserTwo)
console.log(UserTwo.encryptPassword())
console.log(UserTwo.changeUsername())
