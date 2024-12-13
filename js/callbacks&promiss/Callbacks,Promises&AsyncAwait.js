function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success")
        }, 2000);
    })
}
//==================Async-await===============================

// async function getAllData(){
//     console.log("Getting data1........");
//     await getData(1);
//     console.log("Getting data2........");
//     await getData(2);
//     console.log("Getting data3........");
//     await getData(3);
// }

//===========Without Calling a function========================
(async function(){
    console.log("Getting data1........");
    await getData(1);
    console.log("Getting data2........");
    await getData(2);
    console.log("Getting data3........");
    await getData(3);
})()

//==============================Promise Chain===================

// console.log("Getting Data1......");
// getData(1)
//     .then((res) => {
//         console.log("Getting Data2......");
//         return getData(2);
//     })
//     .then((res) => {
//         console.log("Getting Data3......");
//         return getData(3)
//     })
//     .then((res => {
//         console.log(res);
//     }))

//===============================Callback hell====================

// function getData(dataId, getNextData) {
//     setTimeout(() => {
//         console.log("Data",dataId);
//         if (getNextData) {
//             getNextData();
//         }
//     }, 3000);
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
