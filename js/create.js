/*
  Define a TShirt object to hold attributes defining a t-shirt and
  to provide methods to access those attributes. */

  function TShirt(){
    this.category = "men";      // men, women, kids
    this.size = "large";        // small, medium large
    this.color = "brown";       // brown, blue, green
    this.style = "traditional"; // traditoional, baseball, long-sleeve
    this.quote = "";            // string to hold the quote to be printed
    this.price = 29.95;         // All shirts $29.95 - for now
    this.quantity = 1;          // how many does the customet want

    // get the category
    this.getCategory = function() {
      return this.category;
    }

    // set the category
    this.setCategory = function(category) {
      switch(category){
        case "men":
          this.category = category;
          return true;
        case "women":
          this.category = category;
          return true;
        case "kids":
          this.category = category;
          return true;
        default:
          return false;
      } //switch
    } // setCategory

    // get the size
    this.getCategory = function() {
      return this.size;
    }

    // set the size
    this.setSize = function(size) {
      switch(size){
        case "small":
          this.category = size;
          return true;
        case "medium":
          this.category = size;
          return true;
        case "large":
          this.category = size;
          return true;
        default:
          return false;
      } //switch
    } // setSize

     // get the color
    this.getColor = function() {
      return this.color;
    }

    // set the color
    this.setColor = function(color) {
      switch(size){
        case "brown":
          this.category = color;
          return true;
        case "blue":
          this.category = color;
          return true;
        case "green":
          this.category = color;
          return true;
        default:
          return false;
      } //switch
    } // setColor
  }

   // get the style
    this.getStyle = function() {
      return this.style;
    }

      // set the style
    this.setStyle = function(style) {
      switch(size){
        case "traditional":
          this.category = style;
          return true;
        case "baseball":
          this.category = style;
          return true;
        case "long-sleeve":
          this.category = style;
          return true;
        default:
          return false;
      } //switch
    } // setStyle
  }

   // get the quote
    this.getQuote = function() {
      return this.style;
    }

      // set the quote
    this.setStyle = function(quote) {
        this.quote = quote;
        return true;
    } // setQuote

    // get the price
    this.getPrice = function() {
      return this.price;
    }

    // There is no method to set the price - all are $29.95, for now

   // get the quantity
    this.getQuantity = function() {
      return this.quantity;
    }

      // set the quote
    this.setStyle = function(quantity) {
        this.quantity = quantity;
        return true;
    } // setQuote

    // method to return a CSV string with all the attribute values
    this.getCSV = function() {
      var csvString = this.category + ',' + this.size + ',' + this.color + ',' + this.style + ', "' +
                      this.quote + '",' + this.price + ',' + this.quantity;
      return
    } // getCSV
 } // TShirt


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
