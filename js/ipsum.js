/*test users, set login to false*/
var users = ['username' , 'forrest', 'john', 'sam'];
var loggedinuser = "";

/*on load write and handle login form's*/
  $("div.login").append("<form><button id='login-pop'>Login</button><button id='signup-pop'>Signup</button></form>");

function signupForm() {
  $("div.login form").empty();
  $("div.login").append("<form><div><label>Username:</label><input type='text' id='named' name='username'/></div><div><button id='signedup'>Signed up</button></div></form>");
//borrowed form guts     action='/signup' method='post'
}

function loginForm() {
  $("div.login form").empty();
  $("div.login").append("<form><div><label>Username:</label><input type='text' id='named' name='username'/></div><div><button id='loggedin'>Logged In</button></div></form>");
  //borrowed form guts     action='/signup' method='post'
}

/* log user in.  Currently not firing for some reason */
function loggedIn() {
  checkname=$("div.login #named").val();
  for(var i = 0; i < users.length; i++) {
    if(users[i] == checkname) {
      loggedinuser = $("div.login #named").val();
      loggedinuser = checkname;
      loggedinuser = new User(loggedinuser);
      $("div.login form").empty();
      $("div.login").append("<div><label id='userlogedin'>Welcome Back "+loggedinuser.name+"</label></div></form>");
      break;
    }

    else {
      signupForm();
    }
  }
}

/*UserObject, Item Object & Cart*/
function User (loggedinuser) {
  this.name = loggedinuser;
  /* Cart to be filled with Item's */
  this.shopCart = [];
}

function Item (itemtype, color, size, ipsum) {
  this.itemtype = itemtype;
  this.color = color;
  this.size = size;
  this.ipsum = ipsum;
  this.uniquename = itemtype+color+size+ipsum;
}

function shoppingCart(name) {
  var itemname = this.id();
  var color = $("#createcolor").val();
  var size = $("#createsize").val();
  var ipsum = $("#createipsum").val();
  loggedinuser.shopCart.push(new Item(itemtype+color+size+ipsum));

  alert(itemname +" was added to the cart");
}

function showCart() {
  var cartcontents = " ";
  for(var i = 0; i < loggedinuser.shopCart.length; i++) {
    cartcontents+= loggedinuser.shopCart[i].name + " ";
  }
  alert(cartcontents);
}

/*Return 'n' hipster related words*/
function hipsterIpsum(numberwords) {
  var returnarray = [numberwords]
    var random = Math.floor(Math.random()*hipsterstring.length);
    var split = hipstring[random].split(" ");
    for(var i = 0; i < numberwords; i++) {
      returnarray[i] = split[Math.floor(Math.random()*split.length)];
    }
    alert(returnarray);
    return returnarray;
}

/*Return 'n' lorem related words*/
function loremIpsum(numberwords) {
  var returnarray = [numberwords]
    var random = Math.floor(Math.random()*loremstring.length);
    var split = loremstring[random].split(" ");
    for(var i = 0; i < numberwords; i++) {
      returnarray[i] = split[Math.floor(Math.random()*split.length)];
    }
    alert(returnarray);
    return returnarray;
}

/*Return 'n' bacon related words*/
function baconIpsum(numberwords) {
  var returnarray = [numberwords]
    var random = Math.floor(Math.random()*baconstring.length);
    var split = baconstring[random].split(" ");
    for(var i = 0; i < numberwords; i++) {
      returnarray[i] = split[Math.floor(Math.random()*split.length)];
    }
    alert(returnarray);
    return returnarray;
}

/*Event listners*/

//logging in//
$("button#login-pop").on("click", function(){
  loginForm();
  stepTwoLogin();
});

$("button#signup-pop").on("click", function(){
  signupForm();
  stepTwoLogin();
});

function stepTwoLogin() {
  $("button#signedup").on("click", function(){
    newUser();
  });

  $("button#loggedin").on("click", function(){
    loggedIn();
  });
}

/* See cart contents*/
$("#shop-cart-img").on('click', function (){
  showCart();
});


