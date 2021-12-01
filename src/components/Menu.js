import desserts from "../menu data/Desserts";
import drinks from "../menu data/Drinks";
import meals from "../menu data/Meals";
import Option from "./Option";
import styled from "styled-components";

const Menu = ({category, slogan, type}) => {
    if(category === "foods"){
        category = meals;
    } else if (category === "drinks") {
        category = drinks
    } else category = desserts

    const verifySelection = () =>{
        category.order = [];
        category.data.forEach(element => {
            if(element.isSelected){
                category.order.push({name: element.name, quantity: element.quantity, price: element.price})
            }
        });
        if(category.order.length === 0){
            category.isSelected = false
        } else category.isSelected = true
    }

    return(
    <>
        <ContainerMessage>{slogan}</ContainerMessage>
        <OptionsContainer>
            {category.data.map((element, index) =>(
                  <Option 
                    key = {category+index}
                    element = {element} 
                    type = {type} 
                    index = {index} 
                    category = {category}
                    verifySelection = {verifySelection}
                  />
                ))
            }
        </OptionsContainer>
    </>
    )
}

const ContainerMessage = styled.h2`
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 26px;
    color: #fff;
    margin: 35px 0px 10px 20px;
`
const OptionsContainer = styled.div`
    display: flex;
    width: auto;
    height: 300px;
    overflow-x: scroll;
    overflow-y: hidden;
`

export default Menu