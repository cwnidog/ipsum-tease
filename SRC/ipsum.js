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
  $("div.login").append("<form action='/login' method='post'><div><label>Username:</label><input type='text' name='username'/></div><div><input type='submit' id='subserver' value='Log In'/></div></form>");
}


function hipsteripsum(numberwords) {
  var returnarray = [numberwords]
    var random = Math.floor(Math.random()*hipsterstring.length);
    var split = hipstring[random].split(" ");
    for(var i = 0; i < numberwords; i++) {
      returnarray[i] = split[Math.floor(Math.random()*split.length)];
    }
    alert(returnarray);
    return returnarray;
}

function loremipsum(numberwords) {
  var returnarray = [numberwords]
    var random = Math.floor(Math.random()*loremstring.length);
    var split = loremstring[random].split(" ");
    for(var i = 0; i < numberwords; i++) {
      returnarray[i] = split[Math.floor(Math.random()*split.length)];
    }
    alert(returnarray);
    return returnarray;
}

function baconipsum(numberwords) {
  var returnarray = [numberwords]
    var random = Math.floor(Math.random()*baconstring.length);
    var split = baconstring[random].split(" ");
    for(var i = 0; i < numberwords; i++) {
      returnarray[i] = split[Math.floor(Math.random()*split.length)];
    }
    alert(returnarray);
    return returnarray;
}





