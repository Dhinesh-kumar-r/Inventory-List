let item = document.getElementById("item");
let output = document.getElementById("output");

document.getElementById("submit").addEventListener("click", () => {
  let productName = item.value.trim();

  let existingProducts = localStorage.getItem("product")
    ? JSON.parse(localStorage.getItem("product")): [];


  let isDuplicate = existingProducts.some(
    (product) => product.name === productName);

  if (!isDuplicate) {
    existingProducts.push({ name: productName });
    localStorage.setItem("product", JSON.stringify(existingProducts));

    displayProducts(existingProducts);
  } 
  else {
    existingProducts = existingProducts.filter(
      (product) => product.name !== productName
    );
    localStorage.setItem("product", JSON.stringify(existingProducts));

    displayProducts(existingProducts);
  }
});

function displayProducts(products) {
  output.innerHTML = "";
  products.forEach((product) => {
    output.innerHTML += `<li>${product.name}</li>`;
  });
}

let existingProducts = localStorage.getItem("product")
  ? JSON.parse(localStorage.getItem("product")): [];
displayProducts(existingProducts);
