import "./TopBox.css"

const TopBox = ({slogan, restaurantsName}) => {
    return(
        <div className = "top-box">
        <p className = "restaurants-name">{restaurantsName}</p>
        <p className = "slogan">{slogan}</p>
    </div>
    )
}

export default TopBox