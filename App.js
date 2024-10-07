function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('conatainer')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'

    cartao.innerHTML =
    <div class="cartao_conteudo">
    <h3>${categoria}</h3>
    <div class="cartao_conteudo_pergunta">
        <p>${pergunta}</p>
    </div>
    <div class="cartao_conteudo_resposta">
        <p>${resosta}</p>
    </div>
    </div>


    let resostaEstaVisivel = false

    function viraCartao() {
        resostaEstaVisivel = !resostaEstaVisivel
        cartao.classList.toggle('active', resostaEstaVisivel)
    }
    cartao.addEventListener('click', viraCartao)


    container.appendChild(cartao)

}