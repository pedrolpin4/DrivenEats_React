import {useState} from 'react'
import "./Option.css"

const Option = ({element, index, type, verifySelection}) =>{     
    const [counter, setCounter] = useState(0);
    const [counterClass, setCounterClass] = useState("hidden");
    const [optionsClass, setOptionsClass] = useState("not-selected");

    const show = (counter) => {
        if(counter === 0){
            element.quantity = 1;
            setCounter(1);
            element.isSelected = true;
            setCounterClass("default");
            setOptionsClass("selected");
            verifySelection();
        }
    }

    const increase = (counter) => {
        element.quantity = counter + 1
        console.log(element.quantity);
        setCounter(counter + 1)
        verifySelection();
    }

    const decrease = (counter) => {
        if(counter === 1){
            element.quantity = 0
            setCounter(0);
            setCounterClass("hidden");
            setOptionsClass("not-selected");
            element.isSelected = false;
            verifySelection();            
        } else{
            element.quantity = counter - 1;
            setCounter(counter - 1);
            verifySelection();
        } 
    }
   
    return(
        <button className = {"option " + optionsClass}  key = {type+index} onClick = {() => show(counter)}>
            <img src={element.img} alt = ""/>
            <p className="options-name">{element.name}</p>
            <p className="description">{element.description}</p>
            <div className="price">
                <p>{`R$ ${element.price.toFixed(2).toString().replace(".", ",")}`}</p>
                <p className = {counterClass}><span className = "plus" onClick = {() => increase(counter)}>+</span>{counter}<span className = "minus" onClick = {() => decrease(counter)}>-</span></p>
            </div>
        </button>
    )
}

export default Option