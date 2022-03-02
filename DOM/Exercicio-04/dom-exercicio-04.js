let botao = document.getElementById("botao")
let div = document.querySelector(".div") //Professor porque eu não consigo fazer com get element by ID ?

console.log(botao)
console.log(div)

lamp = document.createElement('img') //criando variavem que vai criar tag img
lamp.src = ".//lampada-apagada-png.png" //adicionando paramentro da lampada apagada
div.appendChild(lamp) //adicionando lamp na div


botao.addEventListener("click", () => {
    if (botao.innerText == "Acender") {
        console.log("clicou")
        botao.innerText = "Apagar"
        lamp.src = ".//lampada-acesa-png.png"
        div.appendChild(lamp)
    } else {
        botao.innerText = "Acender"
        lamp.src = ".//lampada-apagada-png.png"
        div.appendChild(lamp)
    }
})






