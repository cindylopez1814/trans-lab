//Agregar tarjetas

  const btnAgregar = document.getElementById('agregarTarjetas');
  btnAgregar.addEventListener('click', () => {
    let numeroTarjetas = document.getElementById('tarjetaBip').value ;
    const listaTarjetas = document.createElement('div')
    const newTarget = document.createTextNode(numeroTarjetas);
    const contenerNewTarjeta = document.createElement('p');
    contenerNewTarjeta.appendChild(newTarget);
    listaTarjetas.appendChild(contenerNewTarjeta);
    tarjetas.appendChild(listaTarjetas);
    numeroTarjetas = document.getElementById('tarjetaBip').value = "";
  })

  console.log(btnAgregar)