const mainForm = document.querySelector ('#main-form') // vai procurar todos que tem class main-form
const iUser = document.getElementById('username')
const iEmail = document.getElementById('email')
const iPass1 = document.getElementById('pass1')
const iPass2 = document.getElementById('pass2')


console.log(mainForm)

mainForm.addEventListener('submit', (event) => { //só vai ouvir o evento quando apertar botao SUBMIT, o que EVENT ?
    event.preventDefault() //imprede que o formulário tenha o comportamento padrao, pedindo que ele seja enviado.
    event.stopPropagation() // evita que os dados sejam propagados pelo formulário

    if ( //testa se os campos tem conteudo ou nao 
    iUser.value.length == 0 || 
    iEmail.value.lenght == 0 ||
    iPass1.value.lenght == 0 ||
    iPass2.value.lenght == 0 ) 
    {
    alert("Dados insuficiente para cadastro.")
    }

    else if (iPass1.value === iPass2.value){ // confere se o as duas senhas sao iguais
    alert('Formulário enviado.')
    //event.target.submit() //manualmente o envio do formulário, informa qual elemento html executou a funçao.
    console.log(event.target.submit())
    } else {
    alert('Senhas diferentes. Verifique os dados e tente novamente.')
    }

    


    



})


