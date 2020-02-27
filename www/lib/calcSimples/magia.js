// This is a JavaScript file

$(document).on("click","#subtrair", function(){
  var valor1 = $("#valor1").val();
  var valor2 = $("#valor2").val();

  var result = parseFloat(valor1)-parseFloat(valor2);
  $("#result").val(result);
});

$(document).on("click","#somar", function(){
  var valor1 = $("#valor1").val();
  var valor2 = $("#valor2").val();

  var result = parseFloat(valor1)+parseFloat(valor2);
  $("#result").val(result);
});

$(document).on("click","#multiplicar", function(){
  var valor1 = $("#valor1").val();
  var valor2 = $("#valor2").val();

  var result = parseFloat(valor1)*parseFloat(valor2);
  $("#result").val(result);
});

$(document).on("click","#dividir", function(){
  var valor1 = $("#valor1").val();
  var valor2 = $("#valor2").val();

  var result = parseFloat(valor1)/parseFloat(valor2);
  $("#result").val(result);
});


$(document).on("click","#limpar", function(){
  $("#valor1").val(null);
  $("#valor2").val(null);
  $("#result").val(null);
});