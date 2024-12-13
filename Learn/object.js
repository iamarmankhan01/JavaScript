const JsUser ={
    name: "Arman",
    "full name": "Arman khan",
    age: 21,
    location: "Lucknow",
    email: "arman@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["name"]);
// console.log(JsUser["full name"]);

JsUser.email ="Arman@chargpt.com"
//Object.freeze(JsUser); //freeze keyword are use to the lock the does not chage after the freeze 
console.log(JsUser);

//--------------------------------------

JsUser.greeting = function(){
    console.log("Hello pc.....");
}
//console.log(JsUser.greeting);  undefined
console.log(JsUser.greeting());
//-----------------------------function2----------
// JsUser.greetingtwo = function(){
//     console.log(`Hello JS user,${this.name} `);
// }
// console.log(JsUser.greeting());
// console.log(JsUser.greetingtwo());