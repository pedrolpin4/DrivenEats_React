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

    const takeTheOrder = () => {
        const totalPrice = 0;

        const mapTheOrder = (array) => {
            array.order.map(element => {
                totalPrice += element.price;
                return `${element.name} (${element.qty}x), `
            })
        }

        const food = `Pratos: ${mapTheOrder(meals)}`;
        const beverage = `Bebidas: ${mapTheOrder(drinks)}`;
        const candys = `Sobremesas: ${mapTheOrder(desserts)}`;
        
        return `Olá, gostaria de fazer um pedido:
        - ${food}
        - ${beverage}
        - ${candys}
        Total: R$ ${totalPrice.toFixed(2)}`
    }

    const goToWpp = () =>{
        return `https://wa.me/+5521967431453text=${encodeURIComponent(takeTheOrder)}`
    }

    setInterval(verifyOrder, 100);

    return(
        <div className = "bottom-box">
        <button className = {`final-button ${messageClass}`} onClick = {goToWpp}>
            <p>{text}</p>
        </button>
    </div>
    )
}

export default Footer