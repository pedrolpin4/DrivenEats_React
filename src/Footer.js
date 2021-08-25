export default function Footer (props){
    return(
        <div class="bottom-box">
        <button class="botao-final" id='BF' onclick="bonus()">
            <p class = "nao-selecionado" id="NS">Selecione os {props.numberOfItems} itens
                para fechar o pedido</p>
            <p  class = "selecionado" id="S">Finalizar pedido</p>
        </button>
    </div>
    )
}