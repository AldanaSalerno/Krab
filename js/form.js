//mensaje de recomendacion para la contraseña del formulario de registro
  let input = document.getElementById("password");
  let warning = document.getElementById("recomendacion");

 input.addEventListener('focus', ()=>{
 input.style.border = "2px solid #fff";
     warning.textContent = "*Se recomienda que la contraseña tenga al menos 8 caracteres, numeros y signos";
  })

let email = $("#email")
let nombre = $("#nombre")

  $(document).ready(function(){
       //validacion de formulario
    $("#formulario").submit((evento)=>{
        evento.preventDefault();
        let nombre = $("#nombre").val();
        console.log(nombre)

        let email = $("#email").val();
        console.log(email)
  })
})

