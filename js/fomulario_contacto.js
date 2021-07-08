$(document).ready(function(){

    $("#mensaje").hide();

    $("#form").submit(function() {
        return validar();
    });

    $("#nombre").keyup(function() {
        validar();
    });

    $("#email").keyup(function() {
        validar("#email");
    });

    $("#tel").keyup(function() {
        validar("#tel");
    });

    $("#consulta").keyup(function() {
        
        var longitudConsulta=$("#consulta").val();
        var valor=longitudConsulta.length;
        var max=1000;

        var longitudActual=max-valor;

        $("#caracteres").text(longitudActual + " caracteres restantes");
        
        validar("#consulta");
    });
    
});


function validar(){
    var regexemail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;
    var regextel = /(\+11)?[ -]*([0-9][ -]*){8}/;
    var mensaje ="";
    var error =0;

    reset();  

    if ($("#nombre").val()==""){
        mensaje+= "<p> - El campo nombre y apellido es obligatorio </p>";
        error++;
    }

    if(!$("#email").val().match(regexemail)){
        mensaje+= "<p> - Debe ser un email valido</p>";
        error++;
    }

    if(!$("#tel").val().match(regextel)){
        mensaje+= "<p> - Debe ser un teléfono valido</p>";
        error++;
    }

    var longitudConsulta=$("#consulta").val();

    if (longitudConsulta.length>1000){
        mensaje+= "<p> - Caracteres máximos utilizados</p>";
        error++;
    }

    if (error>0){
        
        $("#mensaje").append(mensaje);
        $("#mensaje").show(mensaje);
        return false;
    }

    else{
        
        return true;
    }



}

function reset(){
    $("#nombre").removeClass('error');
    $("#email").removeClass('error');
    $("#tel").removeClass('error');
    $("#consulta").removeClass('error');
    $("#mensaje").empty();
}