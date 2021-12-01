import Footer from "./components/Footer";
import PageContent from "./components/PageContent";
import TopBox from "./components/TopBox";
import GlobalStyles from "./styles/GlobalStyles";

const App = () => (
        <>
            <GlobalStyles />
            <TopBox restaurantsName = "FoodCamp" slogan = "Sua comida em 6 minutos"/>
            <PageContent />
            <Footer numberOfItems = "3"/>
        </>
)

export default App