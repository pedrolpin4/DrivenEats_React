import drinks from "../menu data/Drinks"
import desserts from "../menu data/Desserts"
import meals from "../menu data/Meals"
import { useState } from "react"
import styled from "styled-components"

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
            setText("Send Order");
        } else {
            setMessageClass("not-ready");
            setText(`Select the ${numberOfItems} items to finish your order`);
        }
    }

    const iterate = (array) => {
        array.order.forEach(element => {
            totalPrice += element.price;
            const item = `${element.name} (${element.quantity}x), `;
            switch(array){
                case meals: food += item; break;
                case drinks: beverage += item; break;
                case desserts: candys += item; break;
                default: break;
            }
        })
    }

    setInterval(verifyOrder, 11)

    const takeTheOrder = () => {
        if(drinks.isSelected && desserts.isSelected && meals.isSelected){
            iterate(meals);
            iterate(drinks);
            iterate(desserts)
     
             message = 
     `Olá, gostaria de fazer um pedido:
         - ${food}
         - ${beverage}
         - ${candys}
     Total: R$ ${totalPrice.toFixed(2).toString().replace(".", ",")}`
         
             link = `https://wa.me/5521967431453?text=` + encodeURIComponent(message)
             
             window.open(link, "_blank")
        }
    }

    return(
        <BottomBox>
            <FinalButton messageClass = {messageClass} onClick = {takeTheOrder}>
                <p>{text}</p>
            </FinalButton >
        </BottomBox>
    )
}

const BottomBox = styled.div`
    background: #110000;
    height: 92px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
`
const FinalButton = styled.button`
    cursor: pointer;
    position: relative;
    font-size: 20px;
    color: ${props => props.messageClass === 'ready' ? "#000" : "#bbb"};
    font-weight: bold;
    height: 61px;
    width: 364px;
    border-radius: 50px;
    border: 0px;
    padding: 0px 70px;
    text-align: center;
    background: ${props => props.messageClass === 'ready' ? "#32FE20" : "#333"};
    z-index: 1;

    &::after{
        content: "";
        background-color: ${props => props.messageClass === 'ready' ? "#32FE20" : "#333"};
        z-index: -1;
        display: inline-block;
        height: 100%;
        width: 100%;
        border-radius: 50px;
        position: absolute;
        top: 0;
        left: 0;
        transition: all .4s;
    }

    &:hover{
        transform: ${props => props.messageClass === 'ready' ? "translateY(-3px)" : ""};
        &::after{
            transform: ${props => props.messageClass === 'ready' ? "scaleX(1.2) scaleY(1.3)" : ""};
            opacity: 0;
        }
    }
    
    &:active{
        transform: translateY(-0.1rem);
        box-shadow: 0 0.5rem 1rem rgba(0,0,0, .2);
    }
`

export default Footer