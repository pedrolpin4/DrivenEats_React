export default function Footer (props){
    return(
        <div className = "bottom-box">
        <button className = "final-button">
            <p>Selecione os {props.numberOfItems} itens
            para fechar o pedido</p>
        </button>
    </div>
    )
}