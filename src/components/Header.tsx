import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { media } from '../styles/breakpoints';
import { fonts } from '../styles/typography';

function Header() {
	const [isMenuOpen, setMenuOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement | null>(null);
	const hamburgerRef = useRef<HTMLImageElement>(null);
	const location = useLocation();

	const headerLinks = [
		{ text: 'Home', href: '/' },
		{ text: 'About', href: '/about' },
		{ text: 'Portfolio', href: '/portfolio' },
		{ text: 'CV', href: '/cv' },
		{ text: 'Contact', href: '/contact' },
	];

	const toggleMenu = () => {
		setMenuOpen((prevState) => !prevState);
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				menuRef.current &&
				!menuRef.current.contains(event.target as Node) &&
				!hamburgerRef.current?.contains(event.target as Node)
			) {
				setMenuOpen(false);
			}
		};

		document.addEventListener('click', handleClickOutside);

		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, []);

	return (
		<BigContainer>
			<Container>
				<LogoLink to="/">
					<LogoImg src="/initials-logo.png" alt="initials-logo" />
				</LogoLink>
				<LinksContainer>
					{headerLinks.map((link) => (
						<HeaderLink key={link.text} to={link.href} $active={location.pathname === link.href}>
							{link.text}
						</HeaderLink>
					))}
				</LinksContainer>
				<HamburgerIcon
					src="/icons/hamburger-icon.svg"
					alt="hamburger-icon"
					onClick={toggleMenu}
					ref={hamburgerRef}
				/>
				{isMenuOpen && (
					<MobileMenu ref={menuRef}>
						{headerLinks.map((link) => (
							<HeaderLink
								key={link.text}
								to={link.href}
								$active={location.pathname === link.href}
							>
								{link.text}
							</HeaderLink>
						))}
					</MobileMenu>
				)}
			</Container>
		</BigContainer>
	);
}

// Styling
const BigContainer = styled.div`
	display: flex;
	justify-content: center;
	margin: 10px 15px 0 10px;

	@media ${media.tablet} {
		padding: 0 20px;
	}
`;

const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media ${media.desktopXL} {
		max-width: 1400px;
	}
`;

const LogoLink = styled(Link)`
	display: flex;
	align-items: center;
`;

const LogoImg = styled.img`
	height: 40px;

	@media ${media.tablet} {
		height: 45px;
	}

	@media ${media.desktopXL} {
		height: 55px;
	}
`;

const LinksContainer = styled.div`
	display: none;
	align-items: center;
	width: auto;
	gap: 40px;

	@media ${media.tablet} {
		display: flex;
	}
`;

const HeaderLink = styled(Link)<{ $active: boolean }>`
	font-family: ${fonts.montserrat};
	font-size: 18px;
	text-decoration: none;
	color: black;
	cursor: pointer;
	font-weight: ${(props) => (props.$active ? '600' : 'none')};

	@media ${media.tablet} {
		font-size: 16px;
		border-bottom: ${(props) => (props.$active ? '2px solid black' : 'none')};
		font-weight: ${(props) => (props.$active ? '500' : 'none')};
		padding-bottom: 0.1rem;
	}
`;

const HamburgerIcon = styled.img`
	display: flex;
	width: 20px;

	@media ${media.tablet} {
		display: none;
	}
`;

const MobileMenu = styled.div`
	display: flex;
	flex-direction: column;
	padding: 10px 15px 10px 15px;
	gap: 10px;
	font-size: 12px;
	font-weight: 400;
	position: absolute;
	top: 50px;
	right: 10px;
	background: white;
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
	z-index: 10;
`;

export default Header;
