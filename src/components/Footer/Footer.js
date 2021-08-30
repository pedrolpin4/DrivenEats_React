import "./Footer.css"
import drinks from "../../menu data/Drinks"
import desserts from "../../menu data/Desserts"
import meals from "../../menu data/Meals"
import { useState } from "react"



const Footer = ({numberOfItems}) => {
    const[text, setText] = useState(`Selecione os ${numberOfItems} itens para fechar o pedido`);
    const [messageClass, setMessageClass] = useState("not-ready")

    const verifyOrder = () => {
        if(drinks.isSelected && desserts.isSelected && meals.isSelected){
            setMessageClass("ready");
            setText("Finalizar Pedido");
        } else {
            setMessageClass("not-ready");
            setText(`Selecione os ${numberOfItems} itens para fechar o pedido`);
        }
    }

    setInterval(verifyOrder, 100);

    return(
        <div className = "bottom-box">
        <button className = {`final-button ${messageClass}`}>
            <p>{text}</p>
        </button>
    </div>
    )
}

export default Footer