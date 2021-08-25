
export default function TopBox (props){
    return(
        <div className = "top-box">
        <p className = "nome-restaurante">{props.restaurantsName}</p>
        <p className = "slogan">{props.slogan}</p>
    </div>
    )
}