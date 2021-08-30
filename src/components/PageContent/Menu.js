import desserts from "../../menu data/Desserts";
import drinks from "../../menu data/Drinks";
import meals from "../../menu data/Meals";
import "./PageContent.css"
import Option from "./Option";

const Menu = ({category, slogan, type}) => {
    if(category === "foods"){
        category = meals;
    } else if (category === "drinks") {
        category = drinks
    } else category = desserts

    return(
    <>
        <p className="containers-message">{slogan}</p>
        <div className = "options-container">
            {category.data.map((element, index) =>(
                  <Option 
                    element = {element} 
                    type = {type} 
                    index = {index} 
                    category = {category}
                  />
                ))
            }
        </div>
    </>
    )
}

export default Menu