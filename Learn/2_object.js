//const tinderUser = new Object()  //Signlotan object
/*const tinderUser ={}  //non Singlotan object

tinderUser.id="123abc"
tinderUser.name="Sam"  ===>>Simple
tinderUser.isLoggedIn=false
console.log(tinderUser); */

// //=================+++++++++++++++++++

// const regularUser = {
//     email: "ak643@gmail.com",
//     fullname:{
//        userfullname:{
//            firstName: "Arman",
//            lastName: "Khan"
//     }
//  }
// }
// console.log(regularUser.fullname.userfullname.firstName);

// //====================================

// const obj1 ={1: "a", 2: "b"}
// const obj2 ={3: "a", 4: "b"}

// //=================++++=====method1+++++================

// const obj3 ={obj1,obj2  }
// console.log(obj3);   //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

//=================++++=====metho2+++++================

//const obj3 = Object.assign({},obj1,obj2);
//console.log(obj3);   //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

//=================++++=====method3+++++================

// const obj3 ={...obj1,...obj2}   //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// console.log(obj3);  


//==============================De-structure Object==================

const course ={
    coursename: "Js in hindi",
    price:"999",
    name: "Arman  khan", 
}
//console.log(course.name);

const {coursename}=course
console.log(course.name);

//==============================JSON Object==================

// {
//     "name": "Arman", // that is show the wrong 
//     "course": "MCA",
//     "year":"2023"
// }