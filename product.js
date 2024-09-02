const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = `https://kea-alt-del.dk/t7/api/products/${id}`;

function getProduct() {
  fetch(url)
    .then((res) => res.json())
    .then(visProdukt);
}

function visProdukt(produkt) {
  document.querySelector("h2").textContent = produkt.productdisplayname;
  document.querySelector("h4").textContent = produkt.articletype;
  document.querySelector("h3").textContent = produkt.price + " DKK";
  document.querySelector("p").textContent = produkt.description;
  document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${id}`;
}
