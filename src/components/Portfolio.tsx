import styled from "styled-components";
import { media } from "../styles/breakpoints";

function Portfolio() {
    return (
        <Title>Portfolio</Title>
    )
}

// Styling
const Title = styled.h1`
    display: inline-block;  
    font-family: 'NewYork';
    font-size: 55px;
    font-weight: 100;
    margin-bottom: 5px;
    margin: 0;

    @media ${media.mobile} {
        font-size: 70px;
    }

    @media ${media.tablet} {
        font-size: 80px;
    }

    @media ${media.desktopXL} {
        font-size: 90px;
    }
`;

export default Portfolio;