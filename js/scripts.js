$(document).ready(function() {

  var add = function(number1, number2){
    return parseInt(number1) + parseInt(number2);
  };
  var sub = function(number1, number2){
    return number1 - number2;
  };
  var mult = function(number1, number2){
    return number1 * number2;
  };
  var div = function(number1, number2){
    return number1 / number2;
  };
  $("#add").click(function(event) {
    var number1 = $("input#number1").val();
    var number2 = $("input#number2").val();

     $("#output").text(add(number1, number2));
     event.preventDefault();
   });
  $("#sub").click(function(event) {
    var number1 = $("input#number1").val();
    var number2 = $("input#number2").val();

     $("#output").text(sub(number1, number2));
     event.preventDefault();
   });
  $("#mult").click(function(event) {
    var number1 = $("input#number1").val();
    var number2 = $("input#number2").val();

     $("#output").text(mult(number1, number2));
     event.preventDefault();
   });
  $("#div").click(function(event) {
    var number1 = $("input#number1").val();
    var number2 = $("input#number2").val();

     $("#output").text(div(number1, number2));
     event.preventDefault();
  });
  // var number1 = parseInt(prompt("Enter a number;"));
  // var number2 = parseInt(prompt("Enter another number;"));
  //
  // alert(add(number1, number2));

   // $("#calculator form").submit(function(event) {
   //   var number1 = $("input#number1").val();
   //   var number2 = $("input#number2").val();
   //
   //    $("#output").text(add(number1, number2));
   //
   //    alert(add(number1, number2));
   //    event.preventDefault();
   //
   //  });


  });
