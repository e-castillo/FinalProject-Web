$(document).ready(function(){
    $("#inscripcion").click(function(){
        let comprasRealizadas = localStorage.getItem("contadorDeCursos");
        comprasRealizadas++;
        localStorage.setItem("contadorDeCursos",comprasRealizadas);
        $("#index-contador-de-cursos").text(localStorage.getItem("contadorDeCursos"));
    });

    $(".contenidos").hide();
    $("#introduccion").click(function(){
        $("#introduccion-cont").slideToggle();
    });
    $("#word").click(function(){
        $("#word-cont").slideToggle();
    });
    $("#excel").click(function(){
        $("#excel-cont").slideToggle();
    });
    $("#powerpoint").click(function(){
        $("#powerpoint-cont").slideToggle();
    });
    $("#outlook").click(function(){
        $("#outlook-cont").slideToggle();
    });
    $("#integracion").click(function(){
        $("#integracion-cont").slideToggle();
    });
});