/*  const botao = document.getElementsByTagName( 'button') [0]
//retornam coleçoes 
botao.onclick = function(){
    alert("Você clicou em mim") 
}  */

const botao = document.getElementsByClassName('meu-btn') //retorna coleçao em forma de array

console.log(botao)


const merda = document.getElementsByName("merda") //retornar coleçao 



console.log(merda)

const unico = document.getElementById("unico")


console.log(unico)

/* let btn = document.querySelector(".btn") //pega o primeiro elemento da classe BTN
 */
// query trabalha com seletores de CSS

/* console.log(btn) */

let botaodomal = document.querySelector(".domal")
console.log(botaodomal)

botaodomal.addEventListener('click', () =>{ 
    alert("voce clicou no botao do mal")
    document.body.style.backgroundColor = "red"
}) //adicionar ouvidor de eventos 

/* 
const bttoggle = document.getElementById('toggle')
bttoggle.addEventListener("click", () => {
console.log("ok")

}) */

const btn = document.getElementsByTagName('button')[0]
const divParagrafos = document.getElementById('paragrafos')

btn.addEventListener('click', () => {
    let p = document.createElement("p") //cria um elemento HTML
    p.innerText = 'Paragrafo criado'

    divParagrafos.appendChild(p)
})

let eventos = document.querySelector("#eventos")
console.log(eventos)

eventos.addEventListener('mouseover', () => {
    eventos.style.background= "yellow"

    eventos.textContent = "Opa"
})

eventos.addEventListener('mouseout', () => {
    eventos.style.background = "white"
    eventos.textContent  = "saiu fora"
})

document.addEventListener('keyup', (event) => {
    console.log(event)

    const tecla = document.querySelector( '#eventos') //procurar o elemento #eventos
    const para = eventos.createElement('p') //elementro paragrafo

    //para.innerText = `Voce digitou a tecla ${event.key}`
    //tecla.appendChild(para) */


})







