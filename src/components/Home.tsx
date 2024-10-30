import styled from "styled-components";
import { media } from "../styles/breakpoints";

function Home() {
    return (
        <BigContainer>
            <div>
                <TitleName>Nathalie Gustafsson</TitleName>
                <RoleBox>
                    <LineBox>
                        <Line></Line>
                    </LineBox>
                    <RoleTitle>FRONT END DEVELOPER</RoleTitle>
                </RoleBox>
                <ShortText>
                    A Gothenburg-based Front End Developer with an interest in UX and UI.
                    I enjoy both designing and developing user-friendly interfaces that make
                    digital experiences visually appealing and easy to use.
                </ShortText>
            </div>
        </BigContainer>
    )
}

// Styling
const BigContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    width: auto;
    padding: 20px;
`;

const TitleName = styled.h1`
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

    @media ${media.desktop} {
        font-size: 100px;
    }
`;

const RoleBox = styled.div`
    display: flex;
    gap: 10px;

    @media ${media.tablet} {
        gap: 24px;
    }
`;

const LineBox = styled.div`
    display: flex;
    align-items: center;
    justify-items: center;
`;

const Line = styled.div`
    width: 40px;
    height: 2px;
    background-color: black;

    @media ${media.mobile} {
        width: 70px;
    }

    @media ${media.tablet} {
        width: 80px;
    }

    @media ${media.desktop} {
        width: 100px;
    }
`;

const RoleTitle = styled.h3`
    font-family: 'Montserrat';
    font-size: 18px;
    font-weight: 400;
    margin: 0px;

    @media ${media.mobile} {
        font-size: 25px;
    }

    @media ${media.tablet} {
        font-size: 30px;
    }

    @media ${media.desktop} {
        font-size: 35px;
    }
`;

const ShortText = styled.h6`
    font-family: 'Montserrat';
    font-size: 12px;
    font-weight: 300;
    margin-top: 10px;
    margin-bottom: 0;
    max-width: 700px;

    @media ${media.mobile} {
        font-size: 18px;
    }

    @media ${media.tablet} {
        font-size: 20px;
    }

    @media ${media.desktop} {
        font-size: 24px;
        max-width: 860px;
    }
`;

export default Home;