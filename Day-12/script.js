const product = {
    name: "Laptop",
    price: 50000,
    brand: "Lenovo",
    warranty: "2 years",
    list: ["16GB RAM", "256GB SSD", "15-inch Display"]
}

document.querySelector("#name").textContent = product.name;
document.querySelector("#price").textContent = product.price;
document.querySelector("#brand").textContent = product.brand;
document.querySelector("#warranty").textContent = product.warranty;


const list = document.querySelector("#list");

product.list.push("backlit Keyboard");

for(let i=0; i<product.list.length; i++) {
    const li = document.createElement("li");
    li.innerText = product.list[i];
    list.appendChild(li);
};