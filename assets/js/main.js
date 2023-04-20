const bebestibles = [
  {nombre: "Martini", precio: 2550},
  {nombre: "Cappuccino", precio: 1370},
  {nombre: "Latte", precio: 1350},
  {nombre: "Mojito", precio: 2290}
];

const menu = [
  {nombre: "Insalata di riso", precio: 6750, img:"https://www.dpeek4.csc.flcc.edu/csc162/projects/Project2/Travel%20Site/images/spaghetti.jpg"},
  {nombre: "Insalata ai cipollotti", precio: 5990,img:"http://www.dpeek4.csc.flcc.edu/csc162/projects/Project2/Travel%20Site/images/pizza.jpg"},
  {nombre: "Insalata caprese", precio: 8250,img:"http://www.dpeek4.csc.flcc.edu/csc162/projects/Project2/Travel%20Site/images/mancotti.JPEG"},
];

let total = 0;
let contenido = document.getElementById("contenido")
let contenido2 = document.getElementById("contenido2")

bebestibles.forEach(bebida => {
contenido.innerHTML += `
<tr class="">
<td class="col text-start fs-6"><input type='checkbox' name='${bebida.nombre}' value='${bebida.precio}'>  ${bebida.nombre}</td>
<td class="text-end fs-6">$ ${bebida.precio}</td>
</tr>
`
  $("#contenido input:checkbox").change(function() {
    if (this.checked) {
      $('#item').append(`<p>${$(this).attr('name')}</p>`);
      $('#precio').append(`<p>$ ${$(this).val()}</p>`);
      total += parseInt($(this).val())
    } else {
      $('#item p:contains('+$(this).attr('name')+')').remove();
      $('#precio p:contains('+$(this).val()+')').remove();
      total -= parseInt($(this).val())
    }
    $('#total').text(`$ ${total}`);
  });
});

menu.forEach(plato => {
contenido2.innerHTML += `
<td class="d-block">
            <div class="row">
              <div class="d-block col-9">
                <input type='checkbox' name="${plato.nombre}" value='${plato.precio}'>
                <h6 class="fw-bold">${plato.nombre}</h6>
                <p class="fw-light">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur nesciunt molestiae explicabo </p>
                <h6 class="fw-bold">$ ${plato.precio}</h6>
              </div>
              <div class="col-3 align-content-center justify-content-center my-auto">
                <div class=""><img src="${plato.img}" alt="" class="img-fluid rounded-circle"></div>
              </div>
            </div>
          </td>
`
$("#contenido2 input:checkbox").change(function() {
    if (this.checked) {
      $('#item').append(`<p>${$(this).attr('name')}</p>`);
      $('#precio').append(`<p>$ ${$(this).val()}</p>`);
      total += parseInt($(this).val())
      
    } else {
      $('#item p:contains('+$(this).attr('name')+')').remove();
      $('#precio p:contains('+$(this).val()+')').remove();
      total -= parseInt($(this).val())
    }
    $('#total').text(`$${total}`);
  });
});