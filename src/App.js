import Footer from "./Footer";
import PageContent from "./PageContent";
import TopBox from "./TopBox";

export default function App (){
    return(
        <>
            <TopBox restaurantsName = "FoodCamp" slogan = "Sua comida em 6 minutos"/>
            <PageContent />
            <Footer numberOfItems = "3" />
        </>
    )
}