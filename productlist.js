fetch("https://kea-alt-del.dk/t7/api/products")
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
  if (product.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  }
  if (product.discount) {
    copy.querySelector("article").classList.add("onSale");
  }
  copy.querySelector("a").href = `product.html?id=${product.id}`;
  document.querySelector(".liste").appendChild(copy);
}
