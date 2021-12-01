import styled from "styled-components";

const TopBox = ({slogan, restaurantsName}) => {
    return(
        <TopBoxContainer>
            <Logo>{restaurantsName}</Logo>
            <Slogan>{slogan}</Slogan>
        </TopBoxContainer>
    )
}

const TopBoxContainer = styled.div`
    height: 92px;
    width: 100vw;
    background-color: #111111;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding-left: 15px;
    box-shadow: none;
`

const Logo = styled.h1`
    font-family: 'Righteous';
    font-size: 44px;
    color: #fff;
`

const Slogan = styled.p`
    color: #fff;
    size: 18px;
`

export default TopBox