var users = ['username' , 'forrest', 'john', 'sam'];
var loggedinuser = "";


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

function loggedIn() {
  checkname=$("div.login #named").val();
  for(var i = 0; i < users.length; i++) {
    if(users[i] == checkname) {
      loggedinuser = $("div.login #named").val();
      loggedinuser = checkname;
      loggedinuser = new User(loggedinuser);
      $("div.login form").empty();
      localStorage.setItem('loggedinuser', JSON.stringify(loggedinuser));
      $("div.login").append("<div><label id='userlogedin'>Welcome Back "+loggedinuser.name+"</label></div></form>");
      break;
    }

    else {
      signupForm();
    }
  }
}

function alreadyloggedIn() {
  $("div.login form").empty();
  $("div.login").append("<div><label id='userlogedin'>Welcome Back "+loggedinuser.name+"</label></div></form>");
}

/*UserObject, Item Object & Cart*/
function User (loggedinuser) {
  this.name = loggedinuser;
  /* Cart to be filled with Item's */
  this.shopCart = [];
}

/*Event listners*/

//logging in//
$(document).ready(function(){
  if(JSON.parse(localStorage.getItem('loggedinuser')) != undefined) {
    $("div.login").append("<form><button id='login-pop'>Login</button><button id='signup-pop'>Signup</button></form>");

    $("button#login-pop").on("click", function(){
      loginForm();
      stepTwoLogin();
    });

    $("button#signup-pop").on("click", function(){
      signupForm();
      stepTwoLogin();
    });
  }
  else {
    loggedinuser = JSON.parse(localStorage.getItem('loggedinuser'));
    alert('loggedinuser');
    alreadyloggedIn();
  }
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
