$(document).ready(function(){

    var cantidadDatos=3;

    $("#add").click(function(){
        if(cantidadDatos<10){
        var datoClonado=$(this).parents(".datos").clone(true);
        $(this).parents(".datos").after(datoClonado);
        cantidadDatos++;
        
            validarCosto();
        }
    });

    $(".formulario .delete").click(function(){
    	if(cantidadDatos>=4){
        $(this).parents(".datos").remove();
            cantidadDatos--;
        
            validarCosto();
        }
    });

    function validarCosto(){
        switch(cantidadDatos){
            case 4: 
                $(".precio").text("$150.00.-");
                break;
            case 5: 
                $(".precio").text("$200.00.-");
                break;
            case 6: 
                $(".precio").text("$250.00.-");
                break;
            case 7: 
                $(".precio").text("$300.00.-");
                break;
            case 8: 
                $(".precio").text("$350.00.-");
                break;
            case 9: 
                $(".precio").text("$400.00.-");
                break;
            case 10: 
                $(".precio").text("$450.00.-");
                break;
            default:
                $(".precio").text("$100.00.-");
            }
    }

    
});