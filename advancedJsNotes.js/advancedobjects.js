const descriptor= Object.getOwnPropertyDescriptor(Math, "PI")
console.log(Math.PI)
console.log(descriptor)

const User={
    name: "Ali",
    age: 20,
    email: "ali@gmail.com",
    greeting: function(){
        console.log("Hello")
    }

}
console.log(User)
console.log(Object.getOwnPropertyDescriptor(User, "name"))

Object.defineProperty(User, "name", {
    writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(User, "name"))

//name is not a part of loop because name's enumerable property is false
for (let [key, value] of Object.entries(User)) {
    if (typeof value !=="function")
    {
    console.log(`${key} : ${value}`)
    }
}

//name is a part of loop
Object.defineProperty(User, "name", {
    writable: false,
    enumerable: true
})
console.log(Object.getOwnPropertyDescriptor(User, "name"))

for (let [key, value] of Object.entries(User)) {
    if (typeof value !=="function")
    {
    console.log(`${key} : ${value}`)
    }
}