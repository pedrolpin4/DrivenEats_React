import Options from "./Options"

export default function PageContent (){
    return(
        <div className = "options-block">
            <Options category = "foods" slogan = "Primeiro, seu prato" type = "f"/>
            <Options category = "drinks" slogan = "Agora, sua bebida" type = "dr"/>
            <Options category = "dessert" slogan = "Por último, sua sobremesa" type = "ds"/>
        </div>
    ) 
}