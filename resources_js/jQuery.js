(function(){
$("#cuadro")
	.attr("src","imagenes/cuadro.jpg")
	.addClass("img-thumbnail");
	
	$("ul li ")
	.eq(0).addClass("azul").end()
	.eq(1).addClass("rojo").end()
	.eq(2).addClass("verde").end();


$("#cuadro").on("mouseenter",function(){
  $(this).attr("src","imagenes/luna.jpg");
});


$("#cuadro").on("mouseleave",function(){
  $(this).attr("src","imagenes/cuadro.jpg");
});

$("#link").on("click",function(e){
  e.preventDefault();
  console.log("click Google");

  var link = $(this).attr("href");
  console.log( link );

  window.location = link;
});

$(document).ready(function(){
  console.log("Vamos ya esta cargada");
});

var ddss = $("dd");

ddss.hide();
ddss.eq(0).show();

$("dt").on("mouseenter",function(){

	ddss.slideUp(200);
	$(this).next()
	       .slideDown(200);
});


var conteo = 0;
$(".col-md-3").on("click","#h3Click",function(){
   
   conteo ++;
   var dinamico = "<h3 id='h3-"+ conteo +"'>Dinamico: "+ conteo +"</h3>";
   
   $(".col-md-3").append(dinamico);
  
  if (conteo === 3) {
    
    $("#h3-2").bind("click",function(){
   	console.log("Funcion Dinamica");
   
   });

  }
});
/*Funcion de Multiplicación*/
/*var contador = 0;*/	

$("#boton1").on("click",function(){
	/*contador ++;*/
var base = $("#base").val();

var exponente = $("#exponente").val();
var multiplicacion = (base*exponente);
	   
    var html = "<tr>"
	           +"<td>"+base+"<td>"
	           +"<td>x<td>"
	           +"<td id='td-"+exponente+"'>"+exponente+"<td>"
	           +"<td>=<td>"
	           +"<td>"+multiplicacion+"<td>"
	           +"<tr>";
	
	
	$("table").append(html);           
});

/*Fin Funcion de Multiplicación*/

/*Enevento cambio*/

$("#base").on("change",function(){
  $("tr").not(":eq(0)").remove();

}); 
/*Fin Enevento cambio*/

/*Odjetos en jQuery*/

var carros = {
estadoDeArranque: false,
llantas:4,
puerta:5,
/*Arreglo*/
colores:["Chanpaña","Azul","Verde"],
fabricante:{
 creador:"Akt Motos", 
 numero:"3123831550",
 direccion:"En la casa de sergio"
 },
 
 prender:function(){
   if (carros.estadoDeArranque) {
     console.log("El vehiculo estaba encendido esta apagado");/*Apagado*/
   }else{
      console.log("la moto Prendiendo motor");/*Prender*/	
      carros.estadoDeArranque = true;
   }
   	
 },
 apagar:function(){
 	if (!carros.estadoDeArranque) {
    console.log("La moto ya estaba apagada");
    }else{
      console.log("Apagando la moto");
      carros.estadoDeArranque = false;
    }
 }
};

var fab = carros.fabricante;
/*console.log( fab.numero );*/
$("#idApagar").on("click",function(){
  carros.apagar();
});

$("#idEncender").on("click",function(){
  
  carros.prender();
});


/*Fin de odjetos de jQuery*/
$("<input>",{
  type:        "text",
  class:       "form-control",
  placeholder: "Enter your name"
}).appendTo(".contenido").on("keypress",function( e ){
    console.log( e.keyCode );
}).css({
  position:"relative",
  top:     "200px"
});


/*Objeto de seleccionador de colores*/
var selectOption = {

  /*Cambiar Color */



   cambiarColor:function( img ){
     


     var Ahora = new Date();
     
      console.log( Ahora );
       img = "https://res.cloudinary.com/civico/image/upload/c_fit,f_auto,fl_lossy,h_1200,q_auto:low,w_1200/v1490632252/entity/image/file/07b/000/58d93e3b0aa22c485d00007b.jpg?d="+Ahora;
     $("<img>",{
        src: img,
        class: "img-responsive"
     }).on("load",function(){
      var Ahora = new Date();

      console.log( Ahora );
     })
   
   },

  /*init function para alimentar el select con los options*/
  init: function( opciones ){

    $.extend( selectOption,opciones  );/*la palabra reservada $.extend funciona para concatenar los 
    parametros cundo llamamos la funciona*/

    for(var i=0; i< this.colores.length; i++){
         var color = this.colores[i];
         $("<option>",{
           value: color,
           text: color
         }).appendTo("#cambioColor");
    }
  $("#cambioColor").bind("change",function(){
  var color = $(this).val();
  var url = "imagenes/akt"+ color +".gif";
  selectOption.cambiarColor( url );
  //  $("#imgAkt").attr("src",url);
  });

  }
}
/*Llamada de la funcion*/
selectOption.init({
  colores:['blanca','negromate','negra']

});

/*$("#cambioColor").on("change",function(){
  var color = $(this).val();
  var url = "imagenes/akt"+color+".gif";

  $("#imgAkt").attr("src",url);
});*/



})();




