$(document).ready(function(){
    if(!localStorage.getItem("contadorDeCursos")){
        localStorage.setItem("contadorDeCursos",cursosComprados);
        $("#index-contador-de-cursos").text(cursosComprados);
    }

    else{
        cursosComprados=localStorage.getItem("contadorDeCursos");
        $("#index-contador-de-cursos").text(cursosComprados);
    }          
});