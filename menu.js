document.getElementById('Nuevosaldo').addEventListener('click', () =>{
    ShowSaldo();
  })  
  function ShowSaldo(){
    
    let saldo = document.getElementById('new-saldo');
    let cantidadRetiro = document.getElementById('retiro-cant').value;
    cuentas.map(saldo => {
      console.log(saldo.saldo)
      saldonuevo = saldo.saldo - cantidadRetiro;
      console.log(saldo.saldo);
    })
  }
  