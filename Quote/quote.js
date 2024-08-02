let URL = "https://api.quotable.io/random";
let cont = document.querySelector(".content");
let newBtn = document.querySelector(".New");
let writer = document.querySelector(".writer");

async function start(){
    let quote = await fetch(URL);
    var data = await quote.json();
    console.log(data);
    cont.append(data.content);
    writer.append(data.author);

}
start();
newBtn.addEventListener("click", () => {
    cont.innerHTML ="";
    writer.innerHTML="";
    start();
});
// newBtn.addEventListener("click", start());
function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" +cont.innerHTML +writer.innerHTML,"width=600,height=300");
}