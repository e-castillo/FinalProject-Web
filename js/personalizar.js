$(document).ready(function(){
    $("#precio").addClass("posicion-arribader");

    $("#nombre").keyup(function(){
        $("#destinatario").text($(this).val());
    });
   
    $("#valor").keyup(function(){
        $("#precio").text("$"+$(this).val()+".-");
    });

   $("input[name='color']").change(function(){
        $(".vistaprevia").removeClass("color1 color2 color3 color4 color5 color6");
        $(".vistaprevia").addClass("color"+$(this).val());
   });

   $("input[name='size']").change(function(){
        $("#destinatario").removeClass("px14 px16 px18 px22 px26");
        $("#destinatario").addClass("px"+$(this).val());
   });

   $("input[name='ubicacion']").change(function(){
        $("#precio").removeClass("posicion-arribaiz posicion-arribader posicion-abajoder");
        $("#precio").addClass("posicion-"+$(this).val());
   });

    $("input[name='fondo']").change(function(){
        $(".vistaprevia").removeClass("fondo01 fondo02 fondo03 fondo04 fondo05");
        $(".vistaprevia").addClass("fondo"+$(this).val());
    });
});