let cart = [];
let total = 0;

function addToCart(item, price) {
  cart.push({ item, price });
  total += price;
  updateCart();
}

function updateCart() {
  let list = document.getElementById("cart-items");
  list.innerHTML = "";

  cart.forEach((c) => {
    let li = document.createElement("li");
    li.textContent = `${c.item} - $${c.price.toFixed(2)}`;
    list.appendChild(li);
  });

  document.getElementById("total").textContent = total.toFixed(2);
}

function placeOrder() {
  if (cart.length === 0) return;

  document.getElementById("message").textContent =
    "Order is placed! This is a demo — no money has been charged and no food will be delivered.";

  cart = [];
  total = 0;
  updateCart();
}

function clearCart() {
  cart = [];
  total = 0;
  updateCart();
  document.getElementById("message").textContent = "";
}

function scrollToMenu() {
  document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
}