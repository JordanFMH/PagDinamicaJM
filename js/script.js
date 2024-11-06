const $pagina1 = document.querySelector(".BotonPag1");
const $pagina2 = document.querySelector(".BotonPag2");

const $header1 = document.querySelector(".header1");
const $header2 = document.querySelector(".header2");
const $main1 = document.querySelector(".main1");
const $main2 = document.querySelector(".main2");
const $footer1 = document.querySelector(".footer1");
const $footer2 = document.querySelector(".footer2");

const $volver = document.querySelector(".BotonVolver");

$header1.classList.add("ocultar");
$header2.classList.add("ocultar");
$main1.classList.add("ocultar");
$main2.classList.add("ocultar");
$footer1.classList.add("ocultar");
$footer2.classList.add("ocultar");
$volver.classList.add("ocultar");

function Pag1(){
    $pagina1.classList.add("ocultar")
    $pagina2.classList.add("ocultar")
    
    $header1.classList.remove("ocultar");
    $main1.classList.remove("ocultar");
    $footer1.classList.remove("ocultar");
    $volver.classList.remove("ocultar");
}
$pagina1.addEventListener("click", Pag1);

function Pag2(){
    $pagina1.classList.add("ocultar")
    $pagina2.classList.add("ocultar")
    
    $header2.classList.remove("ocultar");
    $main2.classList.remove("ocultar");
    $footer2.classList.remove("ocultar");
    $volver.classList.remove("ocultar");
}
$pagina2.addEventListener("click", Pag2);

function Vol(){
    $pagina1.classList.remove("ocultar")
    $pagina2.classList.remove("ocultar")

    $header1.classList.add("ocultar");
    $header2.classList.add("ocultar");
    $main1.classList.add("ocultar");
    $main2.classList.add("ocultar");
    $footer1.classList.add("ocultar");
    $footer2.classList.add("ocultar");
    $volver.classList.add("ocultar");
}
$volver.addEventListener("click", Vol);