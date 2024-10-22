import styled from "styled-components";

function Header() {
    const headerLinks = [
        { text: 'About', href: 'about'},
        { text: 'Portoflio', href: 'portfolio'},
        { text: 'CV', href: 'cv'},
        { text: 'Contact', href: 'contact'}
    ]

    return (
        <BigContainer>
            <Container>
                <LogoLink href="/">
                    <LogoImg src="/initials-logo.png" alt="initials-logo" />
                </LogoLink>
                <LinksContainer>
                {headerLinks.map((link) => (
                        <HeaderLink key={link.text} href={link.href}>
                            {link.text}
                        </HeaderLink>
                    ))}
                </LinksContainer>
            </Container>
        </BigContainer>
    )
}


// Styling
const BigContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
`;

const Container = styled.div`
    width: 100%;
    max-width: 1400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LogoLink = styled.a`
    display: flex;
    align-items: center;
`;

const LogoImg = styled.img`
    height: 50px;
`;

const LinksContainer = styled.div`
    display: flex;
    align-items: center;
    width: auto;
    gap: 50px;
`;

const HeaderLink = styled.a`
    font-family: "Montserrat";
    text-decoration: none;
    color: black;

    &:hover {
        text-decoration: underline;
        text-decoration-thickness: 0.01rem;
        text-underline-offset: 0.3rem;
    }  
`;

export default Header;