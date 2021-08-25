export default function Footer (props){
    return(
        <div className = "bottom-box">
        <button className = "botao-final" id='BF'>
            <p className = "nao-selecionado" id="NS">Selecione os {props.numberOfItems} itens
                para fechar o pedido</p>
            <p  className = "selecionado" id="S">Finalizar pedido</p>
        </button>
    </div>
    )
}