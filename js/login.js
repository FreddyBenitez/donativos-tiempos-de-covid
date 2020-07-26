
 $('.toggle').click(function(){
    $('.formulario').animate({
        height: "toggle",
        'padding-top': 'toggle',
        'padding-bottom': 'toggle',
        opacity: 'toggle'
    }, "slow");
});

var usuarioLogin = document.getElementById("txtLoginUser");
var contraseñaLogin = document.getElementById("txtContraUser");
var btnLogin = document.getElementById("form");

btnLogin.addEventListener ('submit', function(event){
    event.preventDefault();
    if (usuarioLogin.value ==='jose' && contraseñaLogin.value === '12345'){
        alert("Inicio de sesion exitoso");
        window.location.href="index.html";
     }
     else
     {
       alert("Los datos son incorrectos");
       return false;
     }
    
    });

    //El siguiente codigo es para validar y registrar usuarios.

    var usuarioRegistro = document.getElementById("txtUsuarioRegistro");
    var contraseñaRegistro = document.getElementById("txtContraseñaUsuarioRegistro");
    var NombreRegistro = document.getElementById("txtNombreusuarioRegistro");
    var ApellidoRegistro = document.getElementById("txtApellidoUsuarioregistro");
    var EdadRegistro = document.getElementById("txtEdadUsuarioRegistro");
    var NacionalidadRegistro = document.getElementById("txtNacionaliadUsuarioRegistro");
    var EmailRegistro = document.getElementById("txtEmailUsaurioRegistro");
    var TelefonoRegistro= document.getElementById("txtTelefonoUsiarioRegistro");
    var btnRegistro = document.getElementById("formRegistro");  

    btnRegistro.addEventListener ('submit', function(event){
        event.preventDefault();
        
        if (usuarioRegistro.value === null || usuarioRegistro.value === "")
        {
           alert("El campo Usuario esta vacio");
            return false;
        }
        if (contraseñaRegistro.value === null || contraseñaRegistro.value === "")
         {
            alert("El campo Contraseña esta  esta vacio");
            return false;
         } 
        if (NombreRegistro.value === null || NombreRegistro.value === "")
        {
            alert("El campo Nombre  esta vacio");
            return false;
        } 
        if (ApellidoRegistro.value === null || ApellidoRegistro.value === "")
        {
            alert("El campo Apellido  esta vacio");
            return false;
        } 
        if (EdadRegistro.value === null || EdadRegistro.value === "")
        {
            alert("El campo Edad  esta vacio");
            return false;
        } 
        if (NacionalidadRegistro.value === null || NacionalidadRegistro.value === "")
        {
            alert("El campo Nacionalidad  esta vacio");
            return false;
        } 
        if (EmailRegistro.value === null || EmailRegistro.value === "")
        {
            alert("El campo Email  esta vacio");
            return false;
        } 
        if (TelefonoRegistro.value === null || TelefonoRegistro.value === "")
        {
            alert("El campo Telefono  esta vacio");
            return false;
        } 
        else{
            alert("Registro Exitoso");
         location.href="index.html"
        
        } 
        
        });
   