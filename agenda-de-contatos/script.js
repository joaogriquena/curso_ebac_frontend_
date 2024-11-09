const form = document.getElementById('form-atividade');
const nomes = []
const numeros = []

let linhas = ''

const delContato = document.getElementById('del-contato')
delContato.addEventListener('click', deletarContatos)

form.addEventListener('submit', function (e) {
    e.preventDefault()

    adicionarContato()
    atualizarContato()
})

function adicionarContato() {
    let digitarNome = document.getElementById('nome-contato')
    let digitarNumero = document.getElementById('numero-contato')

    if (nomes.includes(digitarNome.value)) {
        alert(`Contato ${digitarNome.value} já existe`)
        return
    } else if (numeros.includes(digitarNumero.value)) {
        alert(`Número ${digitarNumero.value} já existe`)
        return
    }

    nomes.push(digitarNome.value)
    numeros.push(digitarNumero.value)

    let linha = "<tr>"
    linha += `<td> ${digitarNome.value} </td>`
    linha += `<td> ${digitarNumero.value} </td>`
    linha += "</tr>"

    linhas += linha

    digitarNome.value = ''
    digitarNumero.value = ''
}

function atualizarContato() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
    atualizarTotalContatos()
}

function deletarContatos() {
    nomes.length = 0
    numeros.length = 0
    linhas = ''
    atualizarContato()
    atualizarTotalContatos() //
}

function atualizarTotalContatos() {
    const totalContatos = document.getElementById('total-contatos')
    totalContatos.textContent = nomes.length
}