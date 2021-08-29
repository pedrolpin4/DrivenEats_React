import { useState } from "react";
import desserts from "../../menu data/Desserts";
import drinks from "../../menu data/Drinks";
import meals from "../../menu data/Meals";
import "./PageContent.css"


const Menu = ({category, slogan, type}) => {
    
    const [measure, setMeasure] = useState(0)
    const [counterClass, setCounterClass] = useState("hidden");
    const [optionsClass, setOptionsClass] = useState("not-selected")

    if(category === "foods"){
        category = meals;
    } else if (category === "drinks") {
        category = drinks
    } else category = desserts

    
    const show = (measure) => {
        if(measure === 0){
            setMeasure(1);
            category.isSelected = true;
            setCounterClass("default");
            setOptionsClass("selected");            
        }
    }

    const increase = (measure) => {
        setMeasure(measure + 1)
    }

    const decrease = (measure) => {
        if(measure === 1){
            setMeasure(0);
            setCounterClass("hidden");
            setOptionsClass("not-selected");            
        } else setMeasure(measure - 1)
    }

    return(
    <>
        <p className="containers-message">{slogan}</p>
        <div className = "options-container">
            {category.data.map((element, index) =>(
                    <button className = {"option " + optionsClass}  key = {type+index} onClick = {() => show(measure)}>
                        <img src={element.img} alt = ""/>
                        <p className="options-name">{element.name}</p>
                        <p className="description">{element.description}</p>
                        <div className="price">
                            <p>{`R$ ${element.price.toFixed(2).toString().replace(".", ",")}`}</p>
                            <p className = {counterClass}><span className = "plus" onClick = {() => increase(measure)}>+</span>{measure}<span className = "minus" onClick = {() => decrease(measure)}>-</span></p>
                        </div>
                    </button>
                ))
            }
        </div>
    </>
    )
}

export default Menu