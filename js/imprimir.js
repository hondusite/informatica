//enviar correo ajax
$(document).ready(function(){
	var email=document.getElementById('email').value;
	var recibo=document.getElementById('recibo').value;
	var nombre=document.getElementById('nombre').value;
	var curso=document.getElementById('curso').value;
	$.ajax({
		type: 'POST',
		url: 'https://hondusite.com/mailer.php',
		crossDomain: true,
		data: 'email='+email+'&recibo='+recibo+'&nombre='+nombre+'&curso='+curso,
		success: function(responseData) {
			var value = responseData;
			console.log(value);
		},
		error: function (responseData) {
			alert('falló el envio del correo electrónico, asi que descargue el archivo como respaldo.');
		}
	});
	
});



function imprimir()
{
	$("#area").printArea();
	
}
