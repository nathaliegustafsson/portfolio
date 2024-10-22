import styled from "styled-components";

function Home() {
    return (
        <BigContainer>
            <Container>
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
            </Container>
        </BigContainer>
    )
}

// Styling
const BigContainer = styled.div`
    background-color: pink;
    display: flex;
    justify-content: center;
`;

const Container = styled.div`
    background-color: lightblue;
`;

const TitleName = styled.h1`
    font-size: 150px;
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
    font-size: 40px;
    margin: 0px;
`;

const ShortText = styled.h6`
    font-family: 'Montserrat';
    font-weight: 300;
    font-size: 24px;
    margin-top: 20px;
`;

export default Home;