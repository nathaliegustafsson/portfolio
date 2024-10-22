import styled from "styled-components";

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
                A Gothenburg-based Front End Developer with an interest in UX and UI. <br/>
                I enjoy both designing and developing user-friendly interfaces that make <br/>
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
`;

const TitleName = styled.h1`
    font-size: 100px;
    font-family: 'NewYork';
    font-weight: 100;
    margin-bottom: 0px;
`;

const RoleBox = styled.div`
    display: flex;
    gap: 24px;
`;

const LineBox = styled.div`
    display: flex;
    align-items: center;
    justify-items: center;
`;

const Line = styled.div`
    width: 180px;
    height: 2px;
    background-color: black;
`;

const RoleTitle = styled.h3`
    font-family: 'Montserrat';
    font-weight: 300;
    font-size: 35px;
    margin: 0px;
`;

const ShortText = styled.h6`
    font-family: 'Montserrat';
    font-weight: 300;
    font-size: 24px;
    margin-top: 20px;
`;

export default Home;