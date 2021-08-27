
export default function TopBox (props){
    return(
        <div className = "top-box">
        <p className = "restaurants-name">{props.restaurantsName}</p>
        <p className = "slogan">{props.slogan}</p>
    </div>
    )
}