let cart = [];
let total = 0;

// -------------------- BASIC ITEM ADD --------------------
function addItem(name, price) {
  cart.push({ name, price });
  total += price;
  updateCart();
}

// -------------------- CART UPDATE --------------------
function updateCart() {
  const list = document.getElementById("cartList");
  const totalEl = document.getElementById("total");

  list.innerHTML = "";

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} - $${item.price.toFixed(2)}
      <button onclick="removeItem(${index})" style="width:auto;padding:3px 6px;margin-left:10px;">
        X
      </button>
    `;
    list.appendChild(li);
  });

  totalEl.textContent = total.toFixed(2);
}

// -------------------- REMOVE ITEM --------------------
function removeItem(index) {
  total -= cart[index].price;
  cart.splice(index, 1);
  updateCart();
}

// -------------------- CLEAR CART --------------------
function clearCart() {
  cart = [];
  total = 0;
  updateCart();
  document.getElementById("orderMessage").textContent = "";
}

// -------------------- PLACE ORDER --------------------
function placeOrder() {
  if (cart.length === 0) return;

  document.getElementById("orderMessage").textContent =
    "Order is placed! (This is a demo — no money has been charged and no food will be delivered.)";

  cart = [];
  total = 0;
  updateCart();
}

// -------------------- SCROLL --------------------
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// -------------------- COMBO BUILDER HELPERS --------------------

// BBQ Smash Special
function addBBQSpecial() {
  const drink = document.getElementById("bbqDrink").value;
  const side1 = document.getElementById("bbqSide1").value;
  const side2 = document.getElementById("bbqSide2").value;

  addItem(`BBQ Smash Special (${drink}, ${side1}, ${side2})`, 21.99);
}

// Spicy Chicken Meal
function addSpicyMeal() {
  const drink = document.getElementById("spicyDrink").value;
  const app = document.getElementById("spicyApp").value;

  addItem(`Spicy Chicken Meal (${drink}, ${app})`, 17.99);
}

// Mac & Bacon Meal
function addMacMeal() {
  const drink = document.getElementById("macDrink").value;
  const app = document.getElementById("macApp").value;

  addItem(`Bacon Mac Supreme (${drink}, ${app})`, 14.99);
}

// Inferno Burger Meal
function addInfernoMeal() {
  const drink = document.getElementById("infernoDrink").value;

  addItem(`Inferno Burger Meal (${drink})`, 29.99);
}

// Custom Combo
function addCustomCombo() {
  const entree = document.getElementById("customEntree").value;
  const drink = document.getElementById("customDrink").value;

  addItem(`Custom Combo (${entree}, ${drink})`, 24.99);
}

// -------------------- ENTRÉE ITEMS --------------------
function addBurger() {
  const size = document.getElementById("burgerSize").value;
  const flavor = document.getElementById("burgerFlavor").value;

  addItem(`${size} ${flavor} Burger`, 9.99);
}

function addChicken() {
  const type = document.getElementById("chickenType").value;
  addItem(`${type} Chicken Sandwich`, 7.99);
}

function addWrap() {
  const type = document.getElementById("wrapType").value;
  addItem(`${type} Wrap`, 6.99);
}

function addPizza() {
  const size = document.getElementById("pizzaSize").value;
  addItem(`${size} Pizza`, 8.99);
}

function addRibs() {
  const heat = document.getElementById("ribHeat").value;
  addItem(`${heat} BBQ Ribs`, 8.99);
}

function addBowl() {
  const type = document.getElementById("bowlType").value;
  addItem(`${type} Bowl`, 9.99);
}