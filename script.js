let main = document.querySelector("#row")
computers.forEach((pc) => {
  let link = document.createElement("a");
  link.classList.add("card");
  link.href = `./pcPage/index.html?pc=${pc.name}`;

  let image = document.createElement("img");
  image.classList.add("pcimage");
  image.src = pc.image;
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

  main.append(link);
})