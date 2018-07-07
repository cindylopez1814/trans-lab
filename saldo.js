const inputTarjeta = document.getElementById('tarjeta-bip').value;
const btnSaldo = document.getElementById('verSaldo');


btnSaldo.addEventListener('click', () => {
  fetch(`http://www.psep.cl/api/Bip.php?&numberBip=${inputTarjeta}`)
  .then(response => response.json()
  ).then(data => { console.log(data)
  })
});
