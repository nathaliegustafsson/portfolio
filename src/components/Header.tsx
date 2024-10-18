import styled from "styled-components";

function Header() {
    return (
        <Container>
            <LogoImg src="/initials-logo.png" alt="initials-logo" />
        </Container>
    )
}

// Styling
const Container = styled.div`
    background-color: pink;
`;

const LogoImg = styled.img`
    height: 50px;
`;

export default Header;