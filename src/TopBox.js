
export default function TopBox (){
    let restaurantsInfo = {
        name: "DrivenEats",
        slogan: "Sua comida em 6 minutos"
    }
    
    return(
        <div class="top-box">
        <p class="nome-restaurante">{restaurantsInfo.name}</p>
        <p class="slogan">{restaurantsInfo.slogan}</p>
    </div>
    )
}