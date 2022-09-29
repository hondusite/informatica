$(".chosen-select").chosen();

function ver(fic){
    fic = fic.split('\\');
      document.getElementById("nomarchivo").value = fic[fic.length-1];
      var formData = new FormData($("#formulario")[0]);
        
        var ruta = "subirfoto.php";
        $.ajax({
            url: ruta,
            type: "POST",
            data: formData,
            contentType: false,
            processData: false,
            success: function(datos)
            {
                $("#respuesta").html(datos);
            }
        });

}