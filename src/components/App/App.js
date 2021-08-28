import Footer from "../Footer/Footer";
import PageContent from "../PageContent/PageContent";
import TopBox from "../TopBox/TopBox";
import "./App.css"

const App = () => {
    return(
        <>
            <TopBox restaurantsName = "FoodCamp" slogan = "Sua comida em 6 minutos"/>
            <PageContent />
            <Footer numberOfItems = "3" />
        </>
    )
}

export default App