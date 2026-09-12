//Object literal
const user={
    username: "Ali",
    loginCount: 8,
    isLoggedIn: true,

    getDetails: function(){
    console.log("User details")
    
//this keyword
    console.log(this.username)
    console.log(this)
    }
}
console.log(user.username);
console.log(user.getDetails());

//Constructor Function
/*const PromiseOne=new Promise();
const date=new Date();*/
function User(username, loginCount, isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;

    this.greeting= function(){
      console.log(`Welcome ${this.username}`);
    }

    return this;
}

const userOne=new User("Sehar", 12, true)
const userTwo=new User("Anas", 8, false)
console.log(userOne)
console.log(userTwo)
console.log(userTwo.constructor);
console.log(userTwo.greeting());
console.log(userOne instanceof User);

