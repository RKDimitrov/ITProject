let params = new URLSearchParams(document.location.search);
let nameFromUrl = params.get("pc");

let pc = null;

computers.forEach((pcFor) => {
    if (pcFor.name == nameFromUrl) {
        pc = pcFor;
    }
})

document.querySelector("#image").src = `.${pc.image}`
document.querySelector("#name").innerText = pc.name
document.querySelector("#price").innerText = pc.price + ("лв.");
document.querySelector("#color").innerText = pc.color
document.querySelector("#type").innerText = pc.type
document.querySelector("#cpu").innerText = pc.cpu
document.querySelector("#gpu").innerText = pc.gpu
document.querySelector("#mb").innerText = pc.mb

const ul = document.querySelector("#ul");

let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");
let li5 = document.createElement("li");
let li4 = document.createElement("li");

li1.innerText = pc.cpu;
ul.append(li1);
li1.style.marginBottom = '7px';
li2.innerText = pc.gpu;
li2.style.marginBottom = '7px';
ul.append(li2);
li3.innerText = pc.psu;
li3.style.marginBottom = '7px';
ul.append(li3);
li4.innerText = pc.mb;
li4.style.marginBottom = '7px';
ul.append(li4);
li5.innerText = pc.color;
ul.append(li5);

let main = document.querySelector("#row")
computers.forEach((pc, id) => {
  let link = document.createElement("a");
  link.classList.add("card");
  link.href = `./index.html?pc=${pc.name}`;

  let image = document.createElement("img");
  image.classList.add("pcimage");
  image.src = `.${pc.image}`;
  image.alt = "snimka"
  link.append(image)

  let titile = document.createElement("h3");
  titile.innerText = pc.name;
  link.append(titile);

  let ul = document.createElement("ul");
  let li1 = document.createElement("li");
  let li2 = document.createElement("li");
  let li3 = document.createElement("li");

  li1.innerText = pc.cpu;
  ul.append(li1);

  li2.innerText = pc.gpu;
  ul.append(li2);

  li3.innerText = pc.psu;
  ul.append(li3);

  link.append(ul);

  let price = document.createElement("h3");
  price.innerText = pc.price + "лв.";
  link.append(price);

  main.append(link)
})



document.querySelector("#fullChar").addEventListener("click", () => {
    scroll()
})
function scroll(){
    document.querySelector("#specs").scrollIntoView({behavior: "smooth", block: "center"});
}