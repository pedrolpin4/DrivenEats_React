const Footer = ({numberOfItems}) => {
    return(
        <div className = "bottom-box">
        <button className = "final-button">
            <p>Selecione os {numberOfItems} itens
            para fechar o pedido</p>
        </button>
    </div>
    )
}

export default Footer