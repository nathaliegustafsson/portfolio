import styled from "styled-components";

function Footer() {
    return (
        <Container>
            <IconContainer>
                <Icon src="/github-icon.svg" alt="github-icon" />
                <Icon src="/linkedin-icon.svg" alt="linkedin-icon" />
            </IconContainer>
        </Container>
    )
}

// Styling
const Container = styled.div`
    background-color: pink;
    border-top: 2px solid black;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
`;

const Icon = styled.img`
    height: 45px;
`;

export default Footer;