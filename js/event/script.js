let button = document.getElementById("btn")

button.addEventListener("click", () => {
    // alert("I was clicked ")
    document.querySelector(".box").innerHTML = "<b>you were clicked </b> Enjoy your click!"
})

button.addEventListener("contextmenu", () => {
    alert("I was clicked ");
})

button.addEventListener("keydown", (e) => {
    console.log(e, e.key, e.keyCode)
})