console.log('this is promise');
let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not support you")
    }
    else {
        setTimeout(() => {
            console.log("yes i am done");
            resolve("Arman")
        }, 3000);
    }
})

prom1.then((a) => {
    console.log(a);
}).catch((err) => {
    console.log("err");

})