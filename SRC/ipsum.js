$("div.login").append("<form><button id='login-pop'>Login</button><button id='signup-pop'>Signup</button></form>");

$("button#login-pop").on("click", function(){
  loginform();
});

$("button#signup-pop").on("click", function(){
  signup();
});

function signup() {
/* Do something

  Probably a signup form

*/
}

function loginform() {
  $("div.login form").empty();
  $("div.login").append("<form action='/login' method='post'><div><label>Username:</label><input type='text' name='username'/></div><div><label>Password:</label><input type='password' name='password'/></div><div><input type='submit' id='subserver' value='Log In'/></div></form>");

}

$("#subserver").on("click", function(){
  app.post('/login',
    passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/login',
      failureFlash: true })
  );
});

$("button#hipipsum").on("click", function(){


})






