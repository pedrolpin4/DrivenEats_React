import {useState} from 'react'
import styled from 'styled-components';
import { FaBackward } from 'react-icons/fa'

const Option = ({element, index, type, verifySelection}) =>{     
    const [counter, setCounter] = useState(0);
    const [counterClass, setCounterClass] = useState("hidden");
    const [rotated, setRotated] = useState(false)
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
        <Product key = {type+index}>
            <FrontSide image = {element.img} optionsClass = {optionsClass} rotated = {rotated}>
                <OptionsName>{element.name}</OptionsName>
                <SeeMore onClick = {() => setRotated(true)}>See More</SeeMore>
            </FrontSide>
            <BackSide rotated = {rotated} optionsClass = {optionsClass}>
                <div className = "svg-holder" onClick = {() => setRotated(false)}>
                    <FaBackward size = {15}/>
                </div>
                <ImageHolder image = {element.img}></ImageHolder>
                <BackSideName>{element.name}</BackSideName>
                <Description>{element.description}</Description>
                <Price>
                    <p onClick = {() => show(counter)}>{`R$ ${element.price.toFixed(2).toString().replace(".", ",")}`}</p>
                    
                    {counterClass === 'hidden' ? 
                        <BuyButton onClick = {() => show(counter)}>Buy</BuyButton> :
                        <p>
                            <span className = "plus" onClick = {() => increase(counter)}>+</span>
                            {counter}
                            <span className = "minus" onClick = {() => decrease(counter)}>-</span>
                        </p>
                    }
                </Price>
            </BackSide>
        </Product>
    )
}

const Product = styled.div` 
    position: relative;
    height: 250px;
    width: 195px;
    overflow: hidden;
    background-color: transparent;
    perspective: 150rem;
    -moz-perspective: 150rem;
    border: none;
    margin: 17px 0px 0px 17px;
    flex-shrink: 0;
`
    
const FrontSide = styled.div`
    position: absolute;
    cursor: pointer;
    backface-visibility: hidden;
    border-radius: 9px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${props => props.image});
    background-size: cover;
    background-color: rgba(0, 0, 0, 0.5);
    background-position: center;
    background-blend-mode: multiply;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 0px;
    text-align: left;
    overflow-x: hidden;
    transform: scale(1) ${props => props.rotated ? "rotateY(-180deg)" : ""};
    transition: transform .5s;
    box-shadow: ${props => props.optionsClass === 'selected' ? "0px 0px 0px 3px #32FA2F" : "0px 1.7px 1.7px .5px rgba(255, 0, 0, 0.25)"};

    :hover{
        div::before{
            transform: scaleX(1);
        }

        div{
            color: #fff;
        }

        div:last-child{
            transform: translateY(0px);
        }
    }
`

const SeeMore = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 30px;
    margin-bottom: 20px;
    border-radius: 20px;
    background-color: #770000;
    transform: translateY(50px);
    color: #fff;
    align-self: center;
    transition: all .4s;
    cursor: pointer; 

    &::after{
        content: "";
        background-color: #770000;
        z-index: -1;
        display: inline-block;
        height: 100%;
        width: 100%;
        border-radius: 20px;
        position: absolute;
        top: 0;
        left: 0;
        transition: all .4s;
    }

    &:hover{
        transform: translateY(-3px);
        &::after{
            transform: scaleX(1.4) scaleY(1.6);
            opacity: 0;
        }
    }
    
    &:active{
        transform: translateY(-1px);
        box-shadow: 0 0.5rem 1rem rgba(0,0,0, .2);
    }
`

const BuyButton = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 25px;
    border-radius: 10px;
    background-color: #770000;
    color: #fff;
    align-self: center;
    transition: all .4s;
    cursor: pointer; 

    &::after{
        content: "";
        background-color: #770000;
        z-index: -1;
        display: inline-block;
        height: 100%;
        width: 100%;
        border-radius: 20px;
        position: absolute;
        top: 0;
        left: 0;
        transition: all .4s;
    }

    &:hover{
        transform: translateY(-3px);
        &::after{
            transform: scaleX(1.4) scaleY(1.6);
            opacity: 0;
        }
    }
    
    &:active{
        transform: translateY(-0.1rem);
        box-shadow: 0 0.5rem 1rem rgba(0,0,0, .2);
    }
`

const OptionsName = styled.div`
    position: relative;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 22px;
    width: 180px;
    font-weight: bold;
    margin: 50px 5px 0px 5px;
    z-index: 1;
    color: transparent;
    transition: color .3s transform .3s;

    &::before{
        content: '';
        position: absolute;
        top: -5px;
        left: -10px;
        right: 0px;
        bottom: -5px;
        background-color: #770000;
        transform: scaleX(0.1);
        transform-origin: left;
        transition: transform .3s;
        z-index: -1;
        border-radius: 2px;
    }
`

const BackSide = styled.div`
    transform: ${props => props.rotated ? "" : "rotateY(180deg)"};
    position: absolute;
    background-color: #000;
    box-shadow: ${props => props.optionsClass === 'selected' ? "0px 0px 0px 3px #32FA2F" : "0px 1.7px 1.7px .5px rgba(255, 0, 0, 0.25)"};
    cursor: pointer;
    backface-visibility: hidden;
    overflow: hidden;
    transition: transform .5s;
    border-radius: 9px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    .svg-holder{
        cursor: pointer;
        position: absolute;
        top: 5px;
        right: 7px;
        background-color: #770000;
        width: 22px;
        height: 22px;
        padding-right: 1px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #ddd;
        transform: scale(1);
        transition: transform .2s;

        :hover{
            transform: scale(1.2)
        }
    }
`

const ImageHolder = styled.div`
    height: 40%;
    width: 100%;
    background: linear-gradient(transparent, rgba(0, 0, 0, 1)), url(${props => props.image});
    background-size: cover;
    background-blend-mode: multiply;
    background-position: center;
`

const BackSideName = styled.h3`
    position: relative;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 22px;
    width: 180px;
    font-weight: bold;
    margin: 0px 5px 0px 5px;
    z-index: 1;
    color: white;
`

const Description = styled.div`
    position: relative;
    margin: 20px 5px 10px 5px;
    padding: 0px 5px;
    font-size: 16px;
    margin-bottom: 9px;
    color: white;
    z-index: 2;
`

const Price = styled.div`
    position: absolute;
    bottom: 2px;
    left: 0;
    font-size: 16px;
    width: 195px;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    margin-top: 20px;

    .minus{
        color: red;
        margin-left: 5px;
        font-size: 16px;
    }

    .plus{
        color: green;
        font-size: 16px;
        margin-right: 5px;  
    }
`

export default Option