$(function(){
//scroll suave de navegación
$("a").click(function(event){
    if (this.hash !== "") {
        event.preventDefault();

        var gato = this.hash;

        $("html, body").animate({
            scrollTop: $(gato).offset().top
        }, 800, function(){
            window.location.hash = gato;
        });
 }
});
});
$(function(){
/*popover aplicados a los iconos del footer*/
$('[data-toggle="popover"]').popover()


//todos los h2 se pondrán de color morado al pasar por encima
$('h2').mouseleave(function(){
    $(this).css('color','#944FF8');
    
});

});

$(function(){
    $('#btn').click(function(){
        $('p.card-text').hide(800);
    })
    
})




/*$(function(){

/*card padre
var btnUno = padre.eq(0);
var btnDos = padre.eq(1);
var btnTres = padre.eq(2);
var btnCuatro = padre.eq(3);

var hijos = $('.card').children();
console.log('muestra los hijos--->, hijos');

var textoUno = hijos.eq(0).find('p.card-text').hide();
var textoDos = hijos.eq(1).find('p.card-text').hide();
var textoTres = hijos.eq(2).find('p.card-text').hide();
var textoCuatro = hijos.eq(3).find('p.card-text').hide();

//evento jquery ocultar texto

btnUno.click(function(event){
    event.preventDefault();
    console.log('probar click en el boton uno');
    textoUno.fadetoggle('fast');*/








