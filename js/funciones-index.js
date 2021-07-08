var cursosComprados=0;

$(document).ready(function(){

let  ingresoPorPrimeraVez=0;

    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        prevArrow:'<span class="priv_arrow"><i class="fas fa-angle-left"></i></span>',
        nextArrow:'<span class="next_arrow"><i class="fas fa-angle-right"></i></span>',
    }); 

    $('.slider-pagos').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        prevArrow:'<span class="priv_arrow"><i class="fas fa-angle-left"></i></span>',
        nextArrow:'<span class="next_arrow"><i class="fas fa-angle-right"></i></span>',
    }); 


    $(".boton-comprar").click(function(){
        cursosComprados++;
        $("#index-contador-de-cursos").text(cursosComprados);
        localStorage.setItem("contadorDeCursos", cursosComprados);
    });

});
