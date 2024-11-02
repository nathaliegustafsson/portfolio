import styled from "styled-components";
import { media } from "../styles/breakpoints";

function Footer() {
    const footerLinks = [
        {
            href: "https://github.com/nathaliegustafsson",
            src: "/github-icon.svg",
            alt: "github-icon"
        },
        {
            href: "https://www.linkedin.com/in/nathalie-gustafsson-5393b415a/",
            src: "/linkedin-icon.svg",
            alt: "linkedin-icon"
        }
    ]

    return (
        <Container>
            <IconContainer>
                {footerLinks.map((link, index) => (
                    <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Icon src={link.src} alt={link.alt}/>
                    </a>
                ))}
            </IconContainer>
        </Container>
    )
}

// Styling
const Container = styled.div`
    border-top: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 0;
`;

const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;

    @media ${media.mobile} {
        gap: 30px;
    }
`;

const Icon = styled.img`
    height: 25px;
    cursor: pointer;

    &:hover {
        opacity: 0.6;
    }

    @media ${media.mobile} {
        height: 35px;
    }

    @media ${media.desktopXL} {
        height: 40px;
    }
`;

export default Footer;