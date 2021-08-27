import desserts from "./Desserts";
import drinks from "./Drinks";
import meals from "./Meals";

const Options = ({category, slogan, type}) => {
    
    if(category === "foods"){
        category = [...meals];
    } else if (category === "drinks") {
        category = [...drinks]
    } else category = [...desserts]

    return(
        <>
            <p className="containers-message">{slogan}</p>
            <div className = "options-container">
                {category.map((element, index) =>(
                        <button className="option" key = {type+index}>
                            <img src={element.img} alt = ""/>
                            <p className="options-name">{element.name}</p>
                            <p className="description">{element.description}</p>
                            <p className="price">{`R$ ${element.price.toFixed(2).toString().replace(".", ",")}`}</p>
                        </button>
                    ))
                }
            </div>
        </>
    )
}

export default Options