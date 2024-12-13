// console.log('One');
// console.log('two');
// console.log('three');
// setTimeout(()=>{
//     console.log("hello")
// },3000)

// console.log('Four');


//===============................Callback...................

// function sum(a,b){
//     console.log(a+b);  
// }
// function calculator(a,b,sumCallback){
//     sumCallback(a,b);
// }
// calculator(1,2,sum);

//==========================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// const hello =()=>{
//    console.log('Hello');
// };
// setTimeout(hello,3000)

//=========>>>>>>>>>>..nesting 
// let age = 19;
// if (age >= 18) {
//   if(age>=60){
//     console.log('senior');

//   }else{
//     console.log('middle');

//   }
// } else {
//     console.log("Child");
// }

//============>>>>>>>>>>>CallBack hell=================

// function getData(dataId, getNextData) {
//     setTimeout(() => {
//         console.log("Data",dataId);
//         if (getNextData) {
//             getNextData();
//         }
//     }, 1000);
// }
// getData(1,() => {
//     console.log("Getting Data2......");
//     getData(2,() => {
//         console.log("Getting Data3.........");
//         getData(3,() => {
//             console.log("Getting Data4.......");
//             getData(4);
//         });
//     });
// });

//+===================Promise========

// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     // resolve("success")
//     reject("some error occurd")
// });
// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success")
//             if (getNextData) {
//                 getNextData();
//             }
//         }, 5000);

//     })
// }

///=======================then or catch use in promise=================

// const getPromiss = ()=>{
//  return   new Promise((resolve, reject) => {
//         console.log("I am a promise");
//       //  resolve("Success");
//       reject("Network Error")

//     });
// }
// let promise =getPromiss();
// promise.then((res)=>{
//     console.log("promise fulfilled",res);   
// });
// promise.catch((err)=>{
//     console.log("rejected",err);   
// })


//==============promise Chain================

// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data 1");
//             resolve("success");
//         }, 3000)
//     });
// }
// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data 2");
//             resolve("success");
//         }, 3000)
//     });
// }

// // console.log("featchin data 1");
// // let p1 = asyncFunc1();
// // p1.then((res) => {
// //     console.log(res);
// //     console.log("featchin data 2");
// //     let p2 = asyncFunc2();
// //     p2.then((res) => {
// //         console.log(res);
// //     });
// // });

// // niche jo code likha hai waise v kar sakte hai

// console.log("featchin data 1...");
// asyncFunc1().then((res)=>{
//     console.log("featchin data 2...");
//     asyncFunc2().then((res) => {
//     });
// });


//=================.......Promise Chaining=========

// function getData(dataId,) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success")
//         }, 2000);
//     })
// }
// // getData(1).then((res)=>{
// //     console.log(res);
// //     getData(2).then(()=>{
// //         console.log(res);      
// //     });
// // });
// //=======================aise v kar sakte hai =============

// console.log("Getting Data1......");
// getData(1).then((res) => {
// console.log("Getting Data2......");
//     return getData(2);
// }).then((res) => {
// console.log("Getting Data3......");
//     return getData(3) 
// }).then((res=>{
//     console.log(res);
// }))

//=============>>>>>>>>>>>>>Async-Await=========

// async function hello(){
//     console.log("Hello");

// }

// function api(){
//     return new Promise ((resolve,reject)=>{
//        setTimeout(() => {
//         console.log("weather data");
//         resolve(200); 
//        }, 2000); 
//     });
// }
// async function getWeatherData(){
//     await api();  //1st call
//     await api();  //2nd call
// }


//=============2nd Ex==========

// function getData(dataId,) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success")
//         }, 2000);
//     })
// }
// async function getAllData() {
//     console.log("Getting data1........");
//     await getData(1);
//     console.log("Getting data2........");
//     await getData(2);
//     console.log("Getting data3........");
//     await getData(3);
//     console.log("Getting data4........");
//     await getData(4);
//     console.log("Getting data5........");
//     await getData(5);
//     console.log("Getting data6........");
//     await getData(6);
//     console.log("Getting data7........");
//     await getData(7);
// }