document.addEventListener("DOMContentLoaded", function() {
  let copy=document.querySelector('.buttons-copy');
  let descargar=document.createElement('button');
  let caja=document.querySelector('.dt-buttons');
  descargar.classList.add('btn');
  descargar.classList.add('btn-success');
  descargar.textContent='Excel';
  descargar.style.position='absolute';
  descargar.style.top='0px';
  descargar.style.left='100px';
  caja.append(descargar);
  descargar.addEventListener('click', excel);
});
function excel(){
  window.location.href='excel.php';
}
function ver(recibo){
     VentanaCentrada('./dompdf/ficha.php?recibo='+recibo,'Ficha','','1024','768','true');
}
function pago(recibo){
 if (confirm("¿Seguro de confirmar el pago de inscripción?")){
    VentanaCentrada('./dompdf/pago.php?recibo='+recibo,'recibo','','1024','768','true');
    setInterval(function(){location.reload();},1500);
  }
}
function anular(recibo){
    if (confirm("¿Seguro de confirmar la anulación del pago de inscripción?")){
        VentanaCentrada('./dompdf/anular.php?recibo='+recibo,'recibo','','1024','768','true');
       setInterval(function(){location.reload();},1500);
    }
}
function editar(recibo){
  VentanaCentrada('./editar.php?recibo='+recibo,'Editar Ficha','','1024','768','true');
  
}
function eliminar(recibo){
  if (confirm("¿Seguro de eliminar este registro?")){
    VentanaCentrada('./dompdf/eliminar.php?recibo='+recibo,'recibo','','1024','768','true');
   setInterval(function(){location.reload();},1500);
}
}