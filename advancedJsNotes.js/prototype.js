//new keyword
function multiplyBy5(num){
    return num*5;
}

multiplyBy5.power=2;
console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function createUser(username, score, age)
{
    this.username= username;
    this.score=score;
    this.age=age;
}
createUser.prototype.increment=function(){
    this.score++;
}
createUser.prototype.printMe= function(){
    console.log(`score of ${this.username} is ${this.score}`);
    
}

const userOne=new createUser("Ali", 90, 15)
const userTwo=new createUser("Sehar", 85, 12)
userOne.increment();
userOne.printMe();

//prototype
let heros= ["thor", "spiderman"]
let heroPower= {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function(){
        console.log(`power of spider-man is ${this.spiderman}`);       
    }
}

Object.prototype.presence= function(){
    console.log("I am present in all objects");
}

Array.prototype.greeting=function(){
    console.log("Hello");
}

heros.presence();
heroPower.presence();
heros.greeting();
//heroPower.greeting();=>error, object heroPower has no access to greeting function 


//prototype inheritance
const User={
    name: "Ali",
    age: "20"
}
const Teacher={
    teachLesson: true
}
const TeachingAssistant={
    isAvailable: true
}
const TASupport={
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeachingAssistant
}

Teacher.__proto__= User
console.log(TASupport.isAvailable);
console.log(Teacher.age);


//modern syntax
Object.setPrototypeOf(TeachingAssistant, Teacher)
console.log(TeachingAssistant.age)

//project
let anotherUser= "Sehar     ";
String.prototype.actualLength= function(){
    console.log(`${this}`);
    console.log(`Actual length is ${this.trim().length}`)
}
anotherUser.actualLength();
"Ali    ".actualLength();