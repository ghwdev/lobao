$(".botao").click(function(){
let personagem =$("#personagem").val()
$(".pn").css("display","block")


function alerta(personagem) {
var imagem = document.createElement("img")
var srcc = "https://img.freepik.com/fotos-premium/retrato-antropomorfico-de-um-empresario-lobo-lobo-chefe-em-terno-de-estilo-oficial_370610-392.jpg?w=826"
imagem.src = srcc;

document.body.appendChild(imagem)
var textos = document.querySelectorAll(".tudo");
textos.forEach(function(elemento) {
    elemento.innerHTML = "O seu personagem é :" + personagem;
});


}

setTimeout(function(){ alerta(personagem)}, 5000);
})
