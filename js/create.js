/*
  Define a TShirt object to hold attributes defining a t-shirt and
  to provide methods to access those attributes. */

  function TShirt(category, size, color, style, text){
    this.category = category;      // men, women, kids
    this.size = size;        // small, medium, large
    this.color = color;       // brown, blue, green
    this.style = style; // traditional, baseball, long-sleeve
    this.text = text;        // string to hold the quote to be printed
    this.price = 29.95;         // All shirts $29.95 - for now
    this.quantity = 1;          // how many does the customer want

    // get the category
    this.getCategory = function() {
      return this.category;
    } // getCategory

    // set the category
    this.setCategory = function(category) {
      switch(category){
        case "Men":
          this.category = category;
          return true;
        case "Women":
          this.category = category;
          return true;
        case "Kids":
          this.category = category;
          return true;
        default:
          return false;
      } //switch
    } // setCategory

    // get the size
    this.getSize = function() {
      return this.size;
    } // getSize

    // set the size
    this.setSize = function(size) {
      switch(size){
        case "Small":
          this.size = size;
          return true;
        case "Medium":
          this.size = size;
          return true;
        case "Large":
          this.size = size;
          return true;
        default:
          return false;
      } //switch
    } // setSize

    // get the style
    this.getStyle = function() {
      return this.style;
    } // getStyle

      // set the style
    this.setStyle = function(style) {
      switch(style){
        case "Traditional":
          this.style = style;
          return true;
        case "Baseball":
          this.style = style;
          return true;
        case "Long-sleeve":
          this.style = style;
          return true;
        default:
          return false;
      } //switch
    } // setStyle


   // get the color
   function getColor() {
    return this.color;
   }

  // set the color
  this.setColor = function(color) {
    switch(color){
      case "Brown":
        this.color = color;
        return true;
      case "Blue":
        this.color = color;
        return true;
      case "Green":
        this.color = color;
        return true;
      default:
        return false;
    } //switch
  } // setColor

  // get the text
  this.getText = function() {
    return this.text;
  }

    // set the text
  this.setText = function(text) {
    this.text = text;
    return true;
  } // setText

  // get the price
  this.getPrice = function() {
    return this.price;
  }

  // There is no method to set the price - all are $29.95, for now

  // get the quantity
  this.getQuantity = function() {
    return this.quantity;
  }

  // method to return a CSV string with all the attribute values
  this.getCSV = function() {
    var csvString = this.category + ',' + this.size + ',' + this.color + ',' +
    this.style + ', "' + this.quote + '",' + this.price + ',' + this.quantity;
    return;
  } // getCSV
}

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

  $("#addToCart").click(function() {
    loggedinuser.shopCart.push(new TShirt($("#createCategory").text(), $("#createSize").text(), $("#createColor").text(), $("#createStyle").text(), $("#createText").text()));
    localStorage.setItem('loggedinuser', JSON.stringify(loggedinuser));
    alert("T-Shirt added to the shopping cart.")
  });

  /* When the cart button is pushed, we'll instantiate a new TShirt and
     populate its attributes with values the user has provided. */

  /*$("#cart").click(function() {

    // get a new instance of TShirt
    var tShirt = new TShirt();

    // fill tShirt with user's values
    tShirt.setCategory($("#createCategory").val);
    tShirt.setSize($("#createSize").val);
    tShirt.setStyle($("#createStyle").val);
    thsirt.setColor($("#createColor").val);
    tShirt.setText($("#shirtText").val);
  }); // when the "Cart" button is clicked

<<<<<<< HEAD

}); // when document ready */
