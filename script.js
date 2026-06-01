let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(product) {
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
  alert("تمت إضافة المنتج إلى السلة");
}

function updateCart() {
  let cartCount = document.getElementById("cartCount");
  let cartItems = document.getElementById("cartItems");

  let total = 0;
  if (cartCount) {
    cartCount.innerText = cart.length;
  }

  if (!cartItems) {
    return;
  }

  if (cart.length === 0) {
    cartItems.innerHTML = "<p>السلة فارغة حاليًا.</p>";
    return;
  }

  cartItems.innerHTML = "";

  cart.forEach(function(item) {
    total += item.price;
    cartItems.innerHTML += `
      <div class="cart-item">
        ${item}
      </div>
    `;
    document.getElementById("cartTotal").innerText =
"Total: " + total + " LYD";
  });
}

function clearCart() {
  cart = [];
  localStorage.removeItem("cart");
  updateCart();
}

updateCart();
function searchPhones() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let phones = document.querySelectorAll(".phone-product");

  phones.forEach(function(phone) {
    let text = phone.innerText.toLowerCase();

    if (text.includes(input)) {
      phone.style.display = "block";
    } else {
      phone.style.display = "none";
    }
  });
}
window.addEventListener("load", function(){

setTimeout(function(){

document.getElementById("loader").style.display = "none";

},1500);

});
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){
entry.target.classList.add("show-section");
}

});

});

sections.forEach(section => {
section.classList.add("hidden-section");
observer.observe(section);
});
let topBtn = document.createElement("button");
topBtn.id = "topBtn";
topBtn.innerHTML = "⬆";
document.body.appendChild(topBtn);

window.addEventListener("scroll", function(){
  topBtn.style.display = window.scrollY > 400 ? "block" : "none";
});

topBtn.onclick = function(){
  window.scrollTo({
    top:0,
    behavior:"smooth"
  });
};
function animateValue(id, end, speed){

let start = 0;

let timer = setInterval(function(){

start++;

document.getElementById(id).innerText = start;

if(start >= end){
clearInterval(timer);
}

}, speed);

}

animateValue("productsCount",1000,2);
animateValue("branchesCount",2,500);
animateValue("goldCount",24,80);
document.querySelectorAll(".faq-question").forEach(function(btn){

btn.addEventListener("click",function(){

let answer = this.nextElementSibling;

if(answer.style.display==="block"){
answer.style.display="none";
}
else{
answer.style.display="block";
}

});

});function startCounters() {
  let counters = document.querySelectorAll(".counter");

  counters.forEach(function(counter) {
    let target = Number(counter.getAttribute("data-target"));
    let count = 0;
    let step = Math.ceil(target / 100);

    let interval = setInterval(function() {
      count += step;

      if (count >= target) {
        count = target;
        clearInterval(interval);
      }

      counter.innerText = count + "+";
    }, 20);
  });
}

startCounters();
function openProduct(name, price, image, info){

  document.getElementById("modalName").innerText = name;
  document.getElementById("modalPrice").innerText = price;
  document.getElementById("modalImage").src = image;
  document.getElementById("modalInfo").innerText = info;

  document.getElementById("modalCartBtn").onclick = function(){
    addToCart(name + " - " + price);
  };

  let modal = new bootstrap.Modal(
    document.getElementById("productModal")
  );

  modal.show();
}