import styled from "styled-components"
import Menu from "./Menu"

const PageContent = () => {
    return(
        <OptionsBlock>
            <Menu category = "foods" slogan = "First, select your meal" type = "f" />
            <Menu category = "drinks" slogan = "Now, your drinks" type = "dr" />
            <Menu category = "dessert" slogan = "And the last one, your dessert" type = "ds" />
        </OptionsBlock>
    ) 
}

const OptionsBlock = styled.div`
    background-color: black;
    padding: 20px 0;
    margin: 92px 0 92px 0;
    position: relative;
    width: auto;
`
export default PageContent