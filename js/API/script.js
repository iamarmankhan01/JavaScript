const URL ="https://cat-fact.herokuapp.com/facts";

const factPara =document.querySelector("#fact");
const btn=document.querySelector("#btn")

let promise = fetch(URL);
console.log(promise);

const getFact = async ()=>{
    console.log("Getting data....");
    let response= await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data[0].text);
    factPara.innerText=data[0].text;
};
btn.addEventListener("click",getFact);