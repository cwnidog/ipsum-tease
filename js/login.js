var users = ['username' , 'forrest', 'john', 'sam'];
var loggedinuser = "";

function loginForm() {
  $("div.login form").empty();
  $("div.login").append("<form><div><label>Username:</label><input type='text' id='named' name='username'/></div><div><button id='loggedin'>Logged In</button></div></form>");
  //borrowed form guts     action='/signup' method='post'
}

function loggedIn() {
  var checkname = $("div.login #named").val();
  $("div.login form").empty();
  if(localStorage.getItem('loggedinuser') === null) {
    $("div.login").append("<form><button id='login-pop'>Login</button></form>");
    $("button#login-pop").on("click", function(){
      loginForm();
      stepTwoLogin();
    });
  }
  else{

  for(var i = 0; i < users.length; i++) {
    /*check local storage for a user*/
    var tempobj = JSON.parse(localStorage.getItem('loggedinuser'));
    if(tempobj.name == users[i]) {
      loggedinuser = JSON.parse(localStorage.getItem('loggedinuser'));
      $("div.login form").empty();
      $("div.login").append("<div><label id='userlogedin'>Welcome Back "+loggedinuser.name+"</label></div><button id='signout'>Signout</button></form>");
      $("#signout").on("click", function() {
        localStorage.clear();
        loggedIn();
      });
      break;
    }

    /*check if new user is valid*/
    else if(users[i] == checkname) {
      loggedinuser = $("div.login #named").val();
      loggedinuser = checkname;
      loggedinuser = new User(loggedinuser);
      $("div.login form").empty();
      localStorage.setItem('loggedinuser', JSON.stringify(loggedinuser));
      $("div.login").append("<div><label id='userlogedin'>Welcome Back "+loggedinuser.name+"</label></div><button id='signout'>Signout</button></form>");
      $("#signout").on("click", function() {
        localStorage.clear();
        loggedIn();
      });
      break;
    }
  }
  }
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
  loggedIn();
});

function stepTwoLogin() {
  $("button#signedup").on("click", function(){
    loggedIn();
  });

  $("button#loggedin").on("click", function(){
    localStorage.setItem('loggedinuser', JSON.stringify(loggedinuser));
    loggedIn();
  });

  $("#shop-cart-img").wrap("<a href='shop-cart.html'></a>");
}
