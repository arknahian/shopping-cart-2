
function increaseAmount(id, priceId, price){
    var userQuantityInput = document.getElementById(id).value;
    userQuantityInput = +userQuantityInput;
    document.getElementById(id).value = userQuantityInput + 1;

    var currentPrice = document.getElementById(priceId).innerText;
    currentPrice = +currentPrice;
    document.getElementById(priceId).innerText = currentPrice + price;

    subtotalAmount()
    
}

function subtotalAmount() {
    var price1 = document.getElementById("price-1").innerText;
    price1 = +price1;
    var price2 = document.getElementById("price-2").innerText;
    price2 = +price2;
    document.getElementById("subtotal").innerText = price1 + price2;
}

function decreaseAmount(id, priceId, price) {
    var userQuantityInput = document.getElementById(id).value;
    userQuantityInput = +userQuantityInput;
    if (userQuantityInput > 1) {
        document.getElementById(id).value = userQuantityInput - 1;
        
        var currentPrice = document.getElementById(priceId).innerText;
        currentPrice = +currentPrice;
        document.getElementById(priceId).innerText = currentPrice - price;
    }
    subtotalAmount();
}

var increaseBtn1 = document.getElementById("increase-1");
increaseBtn1.addEventListener("click", function(){
    increaseAmount("quantity-1", "price-1", 1219);
})


var decreaseBtn1 = document.getElementById("decrease-1");
decreaseBtn1.addEventListener("click", function(){
    decreaseAmount("quantity-1", "price-1", 1219); 
})



var increaseBtn2 = document.getElementById("increase-2");
increaseBtn2.addEventListener("click", function(){
    increaseAmount("quantity-2", "price-2", 59);
})

var decreaseBtn2 = document.getElementById("decrease-2");
decreaseBtn2.addEventListener("click", function(){
    decreaseAmount("quantity-2", "price-2", 59); 
})


function removeProduct(id, existPrice){
    document.getElementById(id).style.display = "none";
    var holdPrice = document.getElementById(existPrice).innerText;
    holdPrice = +holdPrice;

    var subtotalAmount = document.getElementById("subtotal").innerText;
    subtotalAmount = +subtotalAmount;

    document.getElementById("subtotal").innerText = 0 + holdPrice;

    var cart = document.getElementById("cart-item1");
    var cart2 = document.getElementById("cart-item2");
    if ((cart && cart2).style.display === "none") {
        document.getElementById("subtotal").innerText = 000;
    }

}

var removingItem = document.getElementById("remove-product-1");
removingItem.addEventListener("click", function(){
    removeProduct("cart-item1", "price-2");
})

var removingItem = document.getElementById("remove-product-2");
removingItem.addEventListener("click", function(){
    removeProduct("cart-item2", "price-1");
})


