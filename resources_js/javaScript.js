(function(){
//Primer Paso tomamos variables Variables 

var lista = document.getElementById("listaSergio"),
    input = document.getElementById("input-homework"),
    btntarea = document.getElementById("btn-newhomework");
// Realisamos funciones

var agregarTarea = function(){
  var homework = input.value,
    newhomework = document.createElement("li"),
    ancla = document.createElement("a"),
    contenido = document.createTextNode(homework);

   if (homework === "") {
      input.setAttribute("placeholder","Por favor agrega tu tarea"); 
      input.className = "error form-control"; 
      return false;
   }
   //Tomamos el contenido y lo colocamos dentro del ancla <a> de HTML
   ancla.appendChild(contenido);
   //Agregamos atributos al ancla <a> de html
   ancla.setAttribute("href","#");
   //Tomamos el ancla y lo colocamos al elemento <li>  de HTML
   newhomework.appendChild(ancla);
   //Agregamos la nueva tarea a la lista <ul> en HTML
   lista.appendChild(newhomework);
   input.value = "";

   for (var i = 0; i <= lista.children.length -1; i++) {
   	 lista.children[i].addEventListener("click",function(){
     this.parentNode.removeChild(this);
   	 });
   }
};


var comprobarInput = function(){
input.className = "form-control";
input.setAttribute("placeholder","Agrega tu Tarea");
};

var eliminarTarea = function(){
this.parentNode.removeChild(this);
};
//Realizamos eventos
//Agregar Tarea
btntarea.addEventListener("click", agregarTarea);
//Combrobar Input
input.addEventListener("click", comprobarInput);

//Borrando elementos de la lista
for (var i = 0; i <= lista.children.length -1; i++){
	lista.children[i].addEventListener("click",eliminarTarea);
}

}());