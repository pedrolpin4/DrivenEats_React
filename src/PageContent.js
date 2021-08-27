import Options from "./Options"

export default function PageContent (){
    return(
        <div className = "options-block">
            <Options category = "foods" slogan = "Primeiro, seu prato" key = "f"/>
            <Options category = "drinks" slogan = "Agora, sua bebida" key = "dr"/>
            <Options category = "dessert" slogan = "Por último, sua sobremesa" key = "ds"/>
        </div>
    ) 
}