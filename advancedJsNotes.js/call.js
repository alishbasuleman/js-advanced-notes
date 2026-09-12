function setUsername(username){
    this.username=username
    console.log("called")
}

function createUser(username, email, age, password)
{
    setUsername.call(this, username) //call is used to hold reference of setUsername function
    this.email=email
    this.age=age
    this.password=password
}

const User= new createUser("Ali", "ali@gmail.com", 20, "123")
console.log(User)