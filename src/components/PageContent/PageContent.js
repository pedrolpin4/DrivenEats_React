import Menu from "./Menu/Menu"
import "./PageContent.css"

const PageContent = () => {
    return(
        <div className = "options-block">
            <Menu category = "foods" slogan = "Primeiro, seu prato" type = "f" />
            <Menu category = "drinks" slogan = "Agora, sua bebida" type = "dr" />
            <Menu category = "dessert" slogan = "Por último, sua sobremesa" type = "ds" />
        </div>
    ) 
}

export default PageContent