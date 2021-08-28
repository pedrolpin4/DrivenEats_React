import desserts from "../../menu data/Desserts";
import drinks from "../../menu data/Drinks";
import meals from "../../menu data/Meals";


const Menu = ({category, slogan, type}) => {
    
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
                        <button className = "option"  key = {type+index}>
                            <img src={element.img} alt = ""/>
                            <p className="options-name">{element.name}</p>
                            <p className="description">{element.description}</p>
                            <div className="price">
                                <p>{`R$ ${element.price.toFixed(2).toString().replace(".", ",")}`}</p>
                            </div>
                        </button>
                    ))
                }
            </div>
        </>
    )
}

export default Menu