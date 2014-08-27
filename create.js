$(document).ready(function(){

  $("#btnWomen").click(function(){
    $("#createCategory").text("Women");
  });

  $("#btnMen").click(function(){
    $("#createCategory").text("Men");
  });

  $("#btnKids").click(function(){
    $("#createCategory").text("Kids");
  });

  $("#btnSmall").click(function(){
    $("#createSize").text("Small");
  });

  $("#btnMedium").click(function(){
    $("#createSize").text("Medium");
  });

  $("#btnLarge").click(function(){
    $("#createSize").text("Large");
  });

  $("#btnTraditional").click(function(){
    $("#createStyle").text("Traditional");
  });

  $("#btnBaseball").click(function(){
    $("#createStyle").text("Baseball");
  });

  $("#btnLong").click(function(){
    $("#createStyle").text("Long-sleeve");
  });

  $("#btnBlue").click(function(){
    $("#createColor").text("Blue");
  });

  $("#btnBrown").click(function(){
    $("#createColor").text("Brown");
  });

  $("#btnGreen").click(function(){
    $("#createColor").text("Green");
  });

  $("#btnLatin").click(function(){
    $("#createText").text("Latin");
  });

  $("#btnBacon").click(function(){
    $("#createText").text("Bacon");
  });

  $("#btnHipster").click(function(){
    $("#createText").text("Hipster");
  });

// This stuff is a placeholder for populating the <textarea>; we'll be adding connectivity to Forrest's databasa on Thursday

  $("#btnLatin").click(function(){
    $("#shirtText").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
  });

  $("#btnBacon").click(function(){
    $("#shirtText").text("Pork frankfurter ball tip leberkas short loin ribeye, filet mignon chuck turkey. Spare ribs kielbasa sausage corned beef short ribs bresaola frankfurter salami prosciutto sirloin pork loin.");
  });

  $("#btnHipster").click(function(){
    $("#shirtText").text("Lo-fi Etsy wolf, Tumblr food truck single-origin coffee irony Helvetica sartorial cornhole. Biodiesel fanny pack stumptown mlkshk, forage chia art party farm-to-table viral ethical vinyl.");
  });


});
