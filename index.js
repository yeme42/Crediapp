

function consulta(){ 
    let formulario = new FormData (document.getElementById('form'));
    let data = Object.fromEntries(formulario.entries());

    if (data.nombre === ''){
        alerta.innerHTML = `
        <div class="text-center alert alert-danger my-3 col-4" role="alert">
        Debe Colocar Su Nombre
        </div>
        `
    } else if(data.apellido === ''){
        alerta.innerHTML = `
        <div class="text-center alert alert-danger my-3 col-4" role="alert">
          Debe Colocar Su Apellido
          </div>
        `
    } else if(data.numero === ''){
        alerta.innerHTML = `
        <div class="text-center alert alert-danger my-3 col-4" role="alert">
        Debe Colocar Su Numero de Telefono
        </div>
        `
    } else if(data.correo === ''){
        alerta.innerHTML = `
        <div class="text-center alert alert-danger my-3 col-4" role="alert">
        Debe Colocar Su Correo Electronico
        </div>
        `
    } else {
        fetch("http://localhost:3000/posts",{
        body: JSON.stringify(data),
        headers: {
            "content-type": "application/json" 
        },
        method: "POST"
    }
    )
    .then( res=> res.json())
    .then(respuesta =>{
        mostrar()
    } )
    }
    
}


var contenido = document.getElementById('contenido')


function mostrar(){
    fetch("http://localhost:3000/posts")
    .then( res=> res.json())
    .then(respuesta => {
        // console.log("esta es la api", respuesta)
        tabla(respuesta)
    })
}

function tabla(respuesta){
    // console.log(respuesta)
    contenido.innerHTML = ''
    for(let valor of respuesta){
        // console.log(valor)
        contenido.innerHTML += `
        <tr>
          <th scope="row">${valor.id}</th>
          <td>${valor.nombre}</td>
          <td>${valor.apellido}</td>
          <td>${valor.numero}</td>
          <td>${valor.correo}</td>
          <td>${valor.comentario}o</td>
        </tr>

        `
    }
}
