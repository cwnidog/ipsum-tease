function showCart() {
    var cartcontents = " ";
    var total = 0;

    /*Insert each item to shopping cart*/
    for(var i = 0; i < 4; i++) {
        $("#whats-in-cart").append("<div class='cart-title'>"+loggedinuser.shopCart[i].category+"</div><div class='cart-title'>"+loggedinuser.shopCart[i].size+"</div><div class='cart-title'>"+loggedinuser.shopCart[i].color+"</div><div class='cart-title'>"+loggedinuser.shopCart[i].style+"</div><div class='cart-title'>"+loggedinuser.shopCart[i].quote+"</div><div class='cart-title'>$"+loggedinuser.shopCart[i].price+"</div><div class='cart-title'>"+loggedinuser.shopCart[i].quantity+"</div>");
        total += loggedinuser.shopCart[i].price;
    }

    $("#total").html("TOTAL: $"+total);
}

/* Event listeners */
$(document).ready(function(){
  showCart();
});