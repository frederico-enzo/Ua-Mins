var header = document.getElementById('header');
var navigationHeader = document.getElementById('navigation_header');
var content = document.getElementById('content');
var showSidebar = false;

function toggleSidebar() {
    showSidebar = !showSidebar;
    if (showSidebar) {
        navigationHeader.style.marginLeft = '-10vw';
        navigationHeader.style.animationName = 'showSidebar';
        content.style.filter = 'blur(2px)';
    }
    else {
        navigationHeader.style.marginLeft = '-100vw';
        navigationHeader.style.animationName = '';
        content.style.filter = '';
    }
}

function closeSidebar() {
    if (showSidebar) {
        showSidebar = true;
        toggleSidebar();
    }
}

window.addEventListener('resize', function (event) {
    if (window.innerWidth > 768 && showSidebar) {
        showSidebar = true;
        toggleSidebar();
    }
});



function newpost() {


let ainbot = document.getElementById('textbar').value;
console.log = (ainbot);

let bor = document.getElementById('body');
let one = document.createElement('div');//<div id="pucli" class="puplicação">
let two = document.createElement('div');//<div id="divtwo" class="cont-perfil">
let tree = document.createElement('a');// <a id="imgO" href="../html/perfil.html"><img  src="../Teste/teste create a post/img/logo.png" alt=""></a>
let trEE = document.createElement('img')
let gona = document.createElement('a');//<a id="imgo" href="../html/perfil.html"><p>CoinnNepal</p></a>
let gonA = document.createElement('p');
let five = document.createElement('article');//<article id="article">
let six = document.createElement('p');//<p id="posT">Lorem Ipsum is simply dummy</p                                  
let seven = document.createElement('div'); //<div id="opc" class="options"></div> 
let eithg = document.createElement('ul');//<ul id="ul" class="list"> </ul>
let nine = document.createElement('li');//<li id="lione"><img id="imgO" src="../img/love (1).png" alt=""></li>
let nineOne = document.createElement('img')
let ten = document.createElement('li');//<li id="litwo"><img id="imgT" src="../img/balao-de-bate-papo.png" alt=""></li>
let tenOne = document.createElement('img');//
let eleven = document.createElement('li');//<li id="litree"><img id="imgTr" src="../img/verificacao-da-lista-da-area-de-transferencia.png" alt=""></li>
let elevenOne = document.createElement('img');//                

bor.appendChild(one);
one.appendChild(two);
two.appendChild(tree);
tree.appendChild(trEE);
two.appendChild(gona);
gona.appendChild(gonA);
one.appendChild(five);
five.appendChild(six);
one.appendChild(seven);
seven.appendChild(eithg);
eithg.appendChild(nine);
nine.appendChild(nineOne);
eithg.appendChild(ten);
ten.appendChild(tenOne);
eithg.appendChild(eleven);
eleven.appendChild(elevenOne);



one.style.padding = '20px';
one.style.marginTop = '50px';
one.style.marginb = '50px';
one.style.marginLeft = '25vw';
one.style.backgroundColor = '#b9b9b9';
one.style.width = '50%';
one.style.height = '20%';
one.style.borderRadius = '7px';
two.style.display = 'flex';
two.style.alignItems = 'center';
trEE.src = '../Teste/teste create a post/img/logo.png'
trEE.style.maxWidth = '52px';
trEE.style.marginRight = '10px';
gonA.innerHTML = 'CoinnNepal';
gonA.style.color = 'rgb(39, 39, 39)';
gonA.style.font = 'normal 12tp Arial';
six.style.color = 'black';
six.style.padding = '5px 65px';
six.style.boxSizing = 'borde-box';
six.innerHTML = ainbot;
eithg.style.gap = '15px';
eithg.style.marginTop = '10px';
eithg.style.display = 'flex';
eithg.style.padding = '5px 65px';
eithg.style.height = '42px'
eithg.style.width = '42px';
eithg.style.borderRadius = '5px ';
eithg.style.listStyle = 'none';
nineOne.src = '../img/love (1).png'
nineOne.style.width = '25px'
nineOne.style.height = '25px'
tenOne.src = '../img/balao-de-bate-papo.png'
tenOne.style.width = '25px'
tenOne.style.height = '25px'
elevenOne.src = '../img/verificacao-da-lista-da-area-de-transferencia.png'
elevenOne.style.width = '25px'
elevenOne.style.height = '25px'


}

