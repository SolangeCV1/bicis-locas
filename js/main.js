function validateForm(){
/* Escribe tú código aquí */
/*Validacion de nombre y que solo sean letras*/
	var name= document.getElementById('name').value;
	if(name.length <= 2 || /^\s+$/.test(name) || /^[a-zA-Z]*$/.test(name)==false){
  		alert("Hola, falta que ingreses tu Nombre y debes usar solo Letras :)");
  		return false;
	}
/*Validacion de letra mayuscula*/
	validaMayuscula(name)
	function validaMayuscula(name){
		if(name.substring(0,1)==name.substring(0,1).toUpperCase()){
			return true;
		}else{
			alert("Debes escribir la primera letra con mayuscula");
			return false;
		}
	}
/*Validacion de apellido y que solo sean letras*/
	var lastname= document.getElementById('lastname').value;
	if(lastname.length <= 2 || /^\s+$/.test(lastname) || /^[a-zA-Z]*$/.test(lastname)==false){
  		alert("Hola, falta que ingreses tu Apellido y debes usar solo letras");
  		return false;
	}
/*Validacion de letra mayuscula*/
	validaMayuscula(lastname)
	function validaMayuscula(lastname){
		if(lastname.substring(0,1)==lastname.substring(0,1).toUpperCase()){
			return true;
		}else{
			alert("Debes escribir la primera letra con mayuscula");
			return false;
		}
	}
/*Validacion correo electronico*/
	var mail = document.getElementById("input-email").value;
	var mailFormat=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
 		if (!mailFormat.test(mail)) {
 			alert("Ingrese un correo válido.");
 	}
/*Validacion contraseña*/
	var password= document.getElementById('input-password').value;
	if (password == null|| password.length==0 || password ==""){
    alert ("Debes ingresar una contraseña");
 	}else if (password.length <6){
 		alert("Tu contraseña debe tener 6 caracteres o mas");
 	}
 	if(password=="123456" || password=="098765" || password=="password"){
 		alert("password no puede ser igual a "password" ó "123456" ó "098765"")
 	}
/*Validacion del tipo de bicicleta*/
 	var biciTypes= document.querySelector('select').value;
	if (biciTypes == 0) {
        alert("Elige un tipo de bicicleta!");
        return false;
    }
}





