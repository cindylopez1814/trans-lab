const btnIniciar = document.getElementById('init');

btnIniciar.addEventListener('click', () => { 
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  const expresion = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  
  if(email === "" || password === "") {
    alert("Todos los campos son obligatorios");
  }
  if(!expresion.test(email)) {
    alert("El correo no es valido")
  }
  if(password.length > 8) {
    alert("La contaseña es muy larga");
  }
  if (isNaN(password)){
    alert("La contaseña no es valida");
    return false;
  }
}); 