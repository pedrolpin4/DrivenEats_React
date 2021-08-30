import {useState} from 'react'

const Option = ({element, index, type, category}) =>{     
    const [counter, setCounter] = useState(0);
    const [counterClass, setCounterClass] = useState("hidden");
    const [optionsClass, setOptionsClass] = useState("not-selected");

    const show = (counter) => {
        if(counter === 0){
            setCounter(1);
            element.isSelected = true;
            setCounterClass("default");
            setOptionsClass("selected");
        }
    }

    const increase = (counter) => {
        setCounter(counter + 1)
    }

    const decrease = (counter) => {
        if(counter === 1){
            setCounter(0);
            setCounterClass("hidden");
            setOptionsClass("not-selected");
            element.isSelected = false;            
        } else{
            setCounter(counter - 1)
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