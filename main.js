let answer = document.getElementById('answer')
let search = document.getElementById('search')
let luky = document.getElementById('lucky')
const mostrarTexto = () =>{
    answer.innerHTML = `
    <h1 class="centrar">Haz dado click aquí</h1>
    `
}

const ocultar = () =>{
    answer.innerHTML = ''
}

search.onclick = () =>{
    mostrarTexto()
}

luky.onclick = () =>{
    ocultar()
}