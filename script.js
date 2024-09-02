window.addEventListener("DOMContentLoaded", init);
// Dette gør, at alt loades og er klar, især hvis det er data der kommer udefra

const id = 1163;
const uri = `https://kea-alt-del.dk/t7/api/products/${id}`;

function init() {
  fetch(uri)
    .then((response) => response.json())
    .then(handleData);
}

function handleData(json) {
  console.log("json", json);

  document.querySelector("h2").textContent = json.productdisplayname;
  document.querySelector("h4").textContent = json.articletype;
  document.querySelector("h3").textContent = json.price + " DKK";
  document.querySelector("p").textContent = json.description;
}

/*const productsURI = "https://kea-alt-del.dk/t7/api/products";

let productList;
let productTemplate;

function init() {
  productList = document.querySelector("#teacher_list");
  console.log("teacherList", productList);

  productTemplate = document.querySelector("template").content;
  console.log("teacherTemplate", productTemplate);

  fetch(productsURI)
    .then((response) => {
      console.log("response", response);
      return response.json();
    })
    .then(logJSON);
}
function logJSON(json) {
  console.log("json", json);
  json.forEach(showProduct);
}
//forEach tager en function som argument, tager hvert element i array, så det burde være ligegyldigt hvor mange der er

function showProduct(product) {
  const clone = productTemplate.cloneNode(true);
  clone.querySelector("h2").textContent = product.productdisplayname;
  clone.querySelector("h4").textContent = product.articletype;
  teacherList.appendChild(clone);
}*/
