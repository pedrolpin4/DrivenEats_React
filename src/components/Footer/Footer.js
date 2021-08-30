import "./Footer.css"
import drinks from "../../menu data/Drinks"
import desserts from "../../menu data/Desserts"
import meals from "../../menu data/Meals"
import { useState } from "react"



const Footer = ({numberOfItems}) => {
    const[text, setText] = useState(`Selecione os ${numberOfItems} itens para fechar o pedido`);
    const [messageClass, setMessageClass] = useState("not-ready");
    let message = "";
    let link = "";
    let totalPrice = 0;
    let food = `Pratos: `;
    let beverage = `Bebidas: `;
    let candys = `Sobremesas: `;

    const verifyOrder = () => {
        if(drinks.isSelected && desserts.isSelected && meals.isSelected){
            setMessageClass("ready");
            setText("Finalizar Pedido");
        } else {
            setMessageClass("not-ready");
            setText(`Selecione os ${numberOfItems} itens para fechar o pedido`);
        }
    }

    const iterate = (array) => {
        array.order.forEach(element => {
            totalPrice += element.price;
            const item = `${element.name} (${element.quantity}x), `;
            switch(array){
                case meals: food += item; break;
                case drinks: beverage += item; break;
                case desserts: candys += item
            }
        })
    }


    const takeTheOrder = () => {
       iterate(meals);
       iterate(drinks);
       iterate(desserts)

        message = 
`Olá, gostaria de fazer um pedido:
    - ${food}
    - ${beverage}
    - ${candys}
Total: R$ ${totalPrice.toFixed(2).toString().replace(".", ",")}`

        //the message content isn't idented 'cause of its whatsApp format, wich needs to have no spacing between the line breaks and their texts

        link = `https://wa.me/5521967431453?text=` + encodeURIComponent(message)
        
        window.open(link, "_blank")
    }

    setInterval(verifyOrder, 100);

    return(
        <div className = "bottom-box">
            <button className = {`final-button ${messageClass}`} onClick = {takeTheOrder}>
                <p>{text}</p>
            </button>
        </div>
    )
}

export default Footer