


/////UTILIZANDO UNA ESPECIE DE "MODO NOCTURNO" PERO CAMBIANDO COLORES////
   const btnSwitch = document.querySelector("#switch");

     btnSwitch.addEventListener("click", ()=> {
     document.body.classList.toggle("light");
     btnSwitch.classList.toggle("active")

  ///guardando el modo en localStorage
       if(document.body.classList.contains("light")) {
           localStorage.setItem("light-mode", "true")
       } else {
          localStorage.setItem("light-mode", "false")
       }
   });

   if (localStorage.getItem("light-mode") === "true") {
      document.body.classList.add("light");

  } else {
      document.body.classList.remove("light");
   }




//navbar con filtrado por categoria hecha con jquery
$(document).ready(function(){

	// AGREGANDO CLASE ACTIVE AL PRIMER ENLACE
	$('.category_list .category_item[category="all"]').addClass('ct_item-active');

	// FILTRANDO PRODUCTOS
	$('.category_item').click(function(){
		let catProduct = $(this).attr('category');
		console.log(catProduct);

		// AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO
		$('.category_item').removeClass('ct_item-active');
		$(this).addClass('ct_item-active');

		// OCULTANDO PRODUCTOS
		$('.product-item').css('transform', 'scale(0)');
		function hideProduct(){
			$('.product-item').hide();
		} setTimeout(hideProduct,400);

		// MOSTRANDO PRODUCTOS
		function showProduct(){
			$('.product-item[category="'+catProduct+'"]').show();
			$('.product-item[category="'+catProduct+'"]').css('transform', 'scale(1)');
            // $('.product-item[category="'+catProduct+'"]').css('position', 'absolute');
            // $('.product-item[category="'+catProduct+'"]').css('top', '20px');
		} setTimeout(showProduct,400);
	});



    // MOSTRANDO TODOS LOS PRODUCTOS
	$('.category_item[category="all"]').click(function(){
		function showAll(){
			$('.product-item').show();
			$('.product-item').css('transform', 'scale(1)');
		} setTimeout(showAll,400);
	});
});



///////animaciones con jquery   
let texto = $("#texto") 
let mensaje = $("#mensaje")

$(document).ready(function() {
   
      //newsellter
        $(".botonForm-fadeIn").click(function(){
        mensaje.fadeIn("slow");
                 })
        $(".botonForm-fadeOut").click(function(){
        mensaje.fadeOut("slow");    
                  })
     //boton dinamico que cambia a "Enviado" para enviar la info del newseller
        $("#post").click(function() {
            $("#post").html("enviado!")
            $("#post").css("background", "red")
            $("#post").css("color", "white")
        })   
        $("#b").click(function(){
            $("#b").css("border", "black")
        })
    });
    

///get con ajax     
$(document).ready(function () {
     //alert de formulario enviado con exito en el form de contacto
     $("#enviarFormulario").click(function (e) {
        e.preventDefault()
        $.get("json/formulario.json",function(dato) {
            console.log(dato)
            $("#envioFormulario").html (`
            ${dato.alert}
            `)
        })
     })
   
})

//INFO DINAMICAS CON GET AJAX
//utilizando ajax para leer el archivo json y traer info

$(document).ready(function(e){
    $("#traerCards").html("");
    traerInfo();
})

function traerInfo(){
    //funcion xmlhttprequest para obtener info sin tener que recargar la pagina
    const a= new XMLHttpRequest();
    a.open("GET", "json/api.json", true)
    a.send();
    a.onreadystatechange = function() {

        if(this.readyState == 4 && this.status == 200) {
            let datos = JSON.parse(this.responseText);
            let res = document.querySelector("#res");

            res.innerHTML += " ";

            for(let item of datos) { 
                res.innerHTML += `
                <div class="infoCARD">
                <h3 class="infoH3" >${item.title}</h3>
                <p class="info"> ${item.info} </p>
                </div>     
            
                `
            }
        }
    }
 }


 
