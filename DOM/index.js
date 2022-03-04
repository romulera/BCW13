const btn = document.getElementById('todo-btn') //vai buscar um elemento atraves do ID
const input = document.querySelector('#todo-text') //vai pegar um elemento do seletor CSS no caso a classe # ou ID ou TAG

let todos = document.querySelector('.todos')
let todo = document.querySelector('.todo-item')

console.log(btn)
console.log(input)
console.log(input.value.lenght)

console.log(todos)
console.log(todo)

btn.addEventListener('click', () => {
    adicionarTarefa()
 }
)

document.addEventListener('keyup', (evento) => { // se ele apertar a tecle enter
    if (evento.key == "Enter") {
        adicionarTarefa() //precisa colocar os parenteses pra funcao ser execucao, é um gatilho 
    }
})







//criando uma funçao que cria paragrafos leia o imput e coloque dentro do paragrafo

function adicionarTarefa() {
    //primeira coisa ver se tem algo escrito no inpus
    if (input.value.lenght != 0 && input.value != ' ') {
        const divTodoItem = document.createElement('div') //passa uma string com o nome da tag que voce quer criar
        const pTodoContent = document.createElement('p') //criar tag paragrafo
        const btnTrash = document.createElement('button') //criar tag botao 

        //colocando as classes nas tags
        divTodoItem.classList.add('todo-item') //adiciona uma classe na div
        pTodoContent.classList.add('todo-content') //adiciona a classe no paragrafo
        btnTrash.classList.add('trash') // no botao

        pTodoContent.innerText = input.value //joga o valor digitado no input pra dentro do paragrafo
        btnTrash.innerText = "Apagar" //insere o texto dendo do botão

        divTodoItem.appendChild(pTodoContent) //vai receber a tarefa 
        divTodoItem.appendChild(btnTrash) //vai adicionar o botao de apagar

        document.querySelector('.todos').appendChild(divTodoItem) //adiciona na div class=todos o item da lista TODO
        input.value = " "

        console.log(btnTrash)
        btnTrash.addEventListener('click', () => {
            divTodoItem.removeChild()
        })



}}


let BTlixo = document.querySelector('.trash')
console.log(BTlixo)



// btnTrash.addEventListener('click', () => {
//     todos.removeChild(todo)
// } )
