var total = 0;

function showCart() {
    var cartcontents = " ";

    /*Insert each item to shopping cart*/
    for(var i = 0; i < loggedinuser.shopCart.length; i++) {
        $("#whats-in-cart").append("<h3 class='cart-title'>"+loggedinuser.shopCart[i].category+"</h3><h3 class='cart-title'>"+loggedinuser.shopCart[i].size+"</h3><h3 class='cart-title'>"+loggedinuser.shopCart[i].color+"</h3><h3 class='cart-title'>"+loggedinuser.shopCart[i].style+"</h3><h3 class='cart-title'>"+loggedinuser.shopCart[i].quote+"</h3><h3 class='cart-title'>$"+loggedinuser.shopCart[i].price+"</h3><h3 class='cart-title'>"+loggedinuser.shopCart[i].quantity+"</h3>");
        var temp = parseInt(loggedinuser.shopCart[i].price);
        total += temp;
    }
    $("#total").html("TOTAL: $"+total+" ");
}

/* Event listeners */
$(document).ready(function(){
  showCart();
});