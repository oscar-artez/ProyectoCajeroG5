
//DATOS//
const cuentas = [
     { "nombre": 'Javier', "saldo": 200, "password": '123' },
     { "nombre": 'Manuel', "saldo": 290, "password": 'l33t' },
     { "nombre": 'Luis', "saldo": 67, "password": 'pruebas' }
   ];

   let usuarioValido = false;

  document.getElementById("BtnInicioSesion").addEventListener('click', ()=> {

    let usuario = document.getElementById("usuario").value;
    let contraseña = document.getElementById("contraseña").value;
    for ( let i=0; i < cuentas.length; i++){
      let element = cuentas [i];

      if(usuario == "" || contraseña == ""){
        alert('Todos los campos son obligatorios');
        return false;
      }else if(usuario != element.nombre || contraseña != element.password){
        alert('El usuario o contraseña es incorrecto, favor de verificarlo');
        return false;
      }else if (element.nombre === usuario && element.password === contraseña){
        alert('Inicio de sesión exitoso');
        usuarioValido= true;
        window.location.href="menu.html?usuario="+usuario;
        return false;
    }  
   }
  })
    
