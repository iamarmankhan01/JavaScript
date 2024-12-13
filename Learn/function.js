// function sayMyName(){
//   console.log("A");
//   console.log("R");
//   console.log("M");
//   console.log("A");
//   console.log("N");
// }
// sayMyName()

//++++++++++++++add two number+======================

// function addNumber(number1,number2){
//     console.log(number1+number2);
// }
// addNumber(3,5);

//==============================

// function addNumber(number1,number2){
//     return number1+number2;
// }
// const a = addNumber(3,5);
// console.log("The result is: " +a);

//-===================================

// function loginUserMessage(username){
//     return `${username} just logged in`
// }
// console.log(loginUserMessage("arman"));


//=========================================

// function loginUserMessage(username="Arman"){
//     if(!username){
//         console.log("plz enter the username")
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage());


// function calculateCartPrice(...num1){
//     return num1;
// }
//console.log(calculateCartPrice(200,565,4545,45,45));

//===========================================
//  const user={
//     username : "Arman",
//     price: 444
// }
// function handleObject(anyobject){
//     console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
// }
// //handleObject(user);
// handleObject({
//     username: "Atif",
//     price: 599
// })

//====>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const arr = [455,644,543,623,653]
function returnSecondValue(getArray){
    return getArray[1]
}
//console.log(returnSecondValue(arr));
console.log(returnSecondValue([455,644,543,623,653]));

