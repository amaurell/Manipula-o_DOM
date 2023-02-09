let pegaCursos = document.querySelector('.right')
let pegaBtn = [...document.querySelectorAll('.btn')]
let removeSelecionado = document.querySelector('.removeSelecionado')
let cursoSelecionado = document.querySelector('.cursoSelecionado')
let adicionarAntes = document.querySelector('.adicionarAntes')
let adicionarDepois = document.querySelector('.adicionarDepois')
let textoCurso = document.querySelector('#textoCurso')

var marcador = 0;
var pegaClass;
var pegaClassTmp = [];
var ligabtn;
var tmp;
var btn;
var index;

function montaBtn(){
      btn = document.createElement("button")
      btn.setAttribute("class","btn")
      btn.setAttribute("id","ligado")
      btn.innerHTML = textoCurso.value;
  
}
adicionarDepois.addEventListener('click',()=>{
  pegaBtn.map(el =>{

    if (el.innerHTML == marcador){
      
      
      montaBtn()
      pegaBtn.push(btn)
      pegaCursos.insertBefore(btn,el.nextElementSibling)
    }
  })
})
adicionarAntes.addEventListener("click",()=>{
  
  pegaBtn.map(function(el,indice){

    if (el.innerHTML == marcador){
      
      montaBtn()
      pegaBtn.push(btn)
      pegaCursos.insertBefore(btn,el)
     
    }
  })
})

cursoSelecionado.addEventListener("click",()=>{
  alert("O curso selecionado foi "+marcador)
})

removeSelecionado.addEventListener('click',(e)=>{

  var contador=0;
  pegaBtn.map(elmt=>{
    if (elmt.innerHTML === marcador){
      pegaBtn[contador].remove()
      console.log(contador)
    }
    contador++
  })
})
pegaCursos.addEventListener('click',(e)=>{
  var tmp = e.target
  marcador = tmp.innerHTML
  
    pegaBtn.map(evt =>{

    // Cria Array   
    var tmp01 = evt

    // A operação é descartada caso não seja clicado fora da área dos botões
    if (e.target.className !== "right") {
      if (tmp01.id === "desligado" && tmp01.className === 'btn' ){
        tmp01.setAttribute ("id", "ligado")
        
      }
      tmp.setAttribute ("id", "desligado")
    }

  })
  
  e.preventDefault();
})    