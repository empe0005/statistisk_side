const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = `https://kea-alt-del.dk/t7/api/products/${id}`;

window.addEventListener("load", getProduct);

function getProduct() {
  fetch(url)
    .then((res) => res.json())
    .then(visProdukt);
}

function visProdukt(product) {
  document.querySelector("h2").textContent = product.productdisplayname;
  document.querySelector("h4").textContent = product.articletype + " | " + product.category;
  document.querySelector("h3").textContent = product.price + " DKK";
  document.querySelector("p").textContent = "Made in " + product.productionyear;
  if (product.discount) {
    document.querySelector(".text").classList.add("onSale");
    document.querySelector(".sale .rabat").textContent = "DKK " + Math.round(product.price - (product.price * product.discount) / 100);
    document.querySelector(".sale .discount").textContent = "-" + product.discount + "%";
  }
  document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${id}.webp`;
}
