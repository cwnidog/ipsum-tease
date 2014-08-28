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
