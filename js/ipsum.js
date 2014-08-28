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
      /* Test shop cart */
      loggedinuser.shopCart[0] = new Item("t-shirt", "blue", "large", "Gibberish" );
      loggedinuser.shopCart[1] = new Item("t-shirt", "green", "medium", "Gibberish" );
      loggedinuser.shopCart[2] = new Item("t-shirt", "pink", "small", "Gibberish" );

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

  $("#shop-cart-img").wrap("<a href='shop-cart.html'></a>");
}


