const carrito = document.getElementById('carrito');
const catalogos = document.getElementById('lista-catalogo');
const listaCatalogos = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
const finalizarCompra = document.getElementById('finalizar-compra');


cargarEventListeners();

function cargarEventListeners() {
     catalogos.addEventListener('click', comprarCatalogo);
     carrito.addEventListener('click', eliminarCatalogo);
     vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
    finalizarCompra.addEventListener('click', vaciarCarrito);
     document.addEventListener('DOMContentLoaded', leerLocalStorage);
}


function comprarCatalogo(e) {
     e.preventDefault();

     if(e.target.classList.contains('agregar-carrito')){
          const catalogo = e.target.parentElement.parentElement;
          leerDatosCatalogo(catalogo);
     }
}


function leerDatosCatalogo(catalogo) {
     const infoCatalogo = {
          imagen: catalogo.querySelector('img').src,
          titulo: catalogo.querySelector('h4').textContent,
          precio: catalogo.querySelector('.precio span').textContent,
          id: catalogo.querySelector('a').getAttribute('data-id')
     }
     insertarCarrito(infoCatalogo);
}

function insertarCarrito(catalogo) {
     const row = document.createElement('tr');
     row.innerHTML = `
          <td>
               <img src="${catalogo.imagen}" width=100>
          </td>
          <td>${catalogo.titulo}</td>
          <td>${catalogo.precio}</td>
          <td>
               <a href="#" class="borrar-catalogo" data-id="${catalogo.id}">X</a>
          </td>
     `; 
     listaCatalogos.appendChild(row);
     guardarCatalogoLocalStorage(catalogo);
}

function eliminarCatalogo(e) {
     e.preventDefault();

     let catalogo,
          catalogoId;

     if(e.target.classList.contains('borrar-catalogo')){
          e.target.parentElement.parentElement.remove();
          catalogo = e.target.parentElement.parentElement;
          catalogoId = catalogo.querySelector('a').getAttribute('data-id');
     }

     eliminarCatalogoLocalStorage(catalogoId);
}


function vaciarCarrito() {
     while(listaCatalogos.firstChild) {
          listaCatalogos.removeChild(listaCatalogos.firstChild);
     }

     vaciarLocalStorage();

     return false;
}


function guardarCatalogoLocalStorage(catalogo) {
     let catalogos;

     catalogos = obtenerCatalogosLocalStorage();

     catalogos.push(catalogo);

     localStorage.setItem('catalogos', JSON.stringify(catalogos));
}


function obtenerCatalogosLocalStorage() {
     let catalogosLS;

     if(localStorage.getItem('catalogos') === null){
          catalogosLS = [];
     }else {
          catalogosLS = JSON.parse(localStorage.getItem('catalogos'));
     }
     return catalogosLS
}


function leerLocalStorage() {
     let catalogosLS;

     catalogosLS = obtenerCatalogosLocalStorage();

     catalogosLS.forEach(function(catalogo){

          const row = document.createElement('tr');
          row.innerHTML = `
               <td>
                    <img src="${catalogo.imagen}" width=100>
               </td>
               <td>${catalogo.titulo}</td>
               <td>${catalogo.precio}</td>
               <td>
                    <a href="#" class="borrar-catalogo" data-id="${catalogo.id}">X</a>
               </td>
          `;
          listaCatalogos.appendChild(row);

     });
}


function eliminarCatalogoLocalStorage(catalogo) {
     let catalogosLS;

     catalogosLS = obtenerCatalogosLocalStorage();

     catalogosLS.forEach(function(catalogosLS, index){
          if(catalogosLS.id === catalogo) {
               catalogosLS.splice(index, 1);
          }
     });

     localStorage.setItem('catalogos', JSON.stringify(catalogosLS));

}

function vaciarLocalStorage() {
     localStorage.clear();
}


  //modal
  $("#finalizar-compra").on("click", function () {
     Swal.fire({
          icon: "success",
          title: '¡Su compra fue realizada con éxito!',
         
     })
   
   });
   
   $("#vaciar-carrito").click(function () {
     Swal.fire({
          icon: "info",
          title: '¡Su carrito fue vaciado con éxito!',
     })
})

$("#uno").click(function () {
     Swal.fire({
          title: 'Su producto fue agregado con exito',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          } 
        })
})

$("#dos").click(function () {
     Swal.fire({
          title: 'Su producto fue agregado con exito',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          } 
        })
})
$("#tres").click(function () {
     Swal.fire({
          title: 'Su producto fue agregado con exito',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          } 
        })
})
$("#cuatro").click(function () {
     Swal.fire({
          title: 'Su producto fue agregado con exito',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          } 
        })
})
$("#cinco").click(function () {
     Swal.fire({
          title: 'Su producto fue agregado con exito',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          } 
        })
})
$("#seis").click(function () {
     Swal.fire({
          title: 'Su producto fue agregado con exito',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          } 
        })
})
$("#siete").click(function () {
     Swal.fire({
          title: 'Su producto fue agregado con exito',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          } 
        })
})
$("#ocho").click(function () {
     Swal.fire({
          title: 'Su producto fue agregado con exito',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          } 
        })
})