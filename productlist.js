const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

fetch("https://kea-alt-del.dk/t7/api/products?category=" + category)
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  products.forEach(showProduct);
}

function showProduct(product) {
  const template = document.querySelector("#template").content;

  const copy = template.cloneNode(true);

  copy.querySelector("h3").textContent = product.productdisplayname;
  copy.querySelector(".price").textContent = "DKK " + product.price;
  copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector(".subtle").textContent = product.articletype + " | " + product.category;
  if (product.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  }
  if (product.discount) {
    copy.querySelector("article").classList.add("onSale");
    copy.querySelector(".sale .rabat").textContent = "DKK " + Math.round(product.price - (product.price * product.discount) / 100);
    copy.querySelector(".sale .discount").textContent = "-" + product.discount + "%";
  }
  copy.querySelector("a").href = `produkt.html?id=${product.id}`;
  document.querySelector(".liste").appendChild(copy);
}
