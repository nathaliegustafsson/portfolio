import styled from "styled-components";

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
    padding-bottom: 15px;
    padding-top: 15px;
`;

const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
`;

const Icon = styled.img`
    height: 25px;
    cursor: pointer;
`;

// const Container = styled.div`
//     border-top: 1px solid black;
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `;

// const IconContainer = styled.div`
//     display: flex;
//     justify-content: center;
//     gap: 20px;
// `;

// const Icon = styled.img`
//     height: 45px;
// `;

export default Footer;