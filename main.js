
const cuentas = [
    { "nombre": 'Javier', "saldo": 200, "password": '123' },
    { "nombre": 'Manuel', "saldo": 290, "password": 'l33t' },
    { "nombre": 'Luis', "saldo": 67, "password": 'pruebas' }
  ];
    let URL = window.location.href;
    let partes = URL.split("=");//separo la url en el signo ? para obtener los valores enviados
    let usuarioSesion = partes[1];

    let saldo = saldos();

  function saldos(){
    let saldo = 0;
    cuentas.map(nombre => {
        if(nombre.nombre == usuarioSesion){
            saldo = nombre.saldo
            return false;
        }
    });
    return saldo;
 }

document.getElementById('Nuevosaldo').addEventListener('click',() => {
    let saldoActual = document.getElementById("new-saldo");
    saldoActual.innerText = saldo;
    console.log(saldo);
})

document.getElementById('btndeposito').addEventListener('click',() => {
    let depositar = document.getElementById("new-deposito");
    let cantidadDeposito = document.getElementById('deposit-cant').value;
    
    if(cantidadDeposito == ''){
        alert('Debes ingresar una cantidad para poder hacer un deposito');
        return false;
    }else if(isNaN(cantidadDeposito)){
        alert('Debes ingresar solo numeros para poder continuar con tu transaccion');
        return false;
    }else{
        saldo = parseFloat(cantidadDeposito) + saldo;
        depositar.innerText = saldo;
        console.log(saldo);
        return false;
    }

})

document.getElementById('retirar').addEventListener('click',() => {
    let  retirar = document.getElementById("new-draw");
    let cantidadRetiro = document.getElementById('retiro-cant').value;
    
    if(cantidadRetiro == ''){
        alert('Debes ingresar una cantidad para poder hacer un retiro');
        return false;
    }else if(isNaN(cantidadRetiro)){
        alert('Debes ingresar solo numeros para poder continuar con tu transaccion');
        return false;
    }else if(cantidadRetiro > saldo){
        alert('No puedes retirar una cantidad mayor de lo que existe en tu cuenta');
        return false;
    }else{
        saldo = saldo - parseFloat(cantidadRetiro);
        retirar.innerText = saldo;
        console.log(saldo);
        return false;
    }

})

 

 




