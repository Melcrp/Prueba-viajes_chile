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
//con click en botón de cards se ocultará card-text (todo el texto de estás)
$(function(){
    $('.btn').click(function(){
        $('p.card-text').hide(800);
    })
    
})









