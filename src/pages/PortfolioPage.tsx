import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Portfolio from '../components/Portfolio';

function PortfolioPage() {
	return (
		<PortfolioPageStyling>
			<header>
				<Header />
			</header>
			<MainContent>
				<Portfolio />
			</MainContent>
			<footer>
				<Footer />
			</footer>
		</PortfolioPageStyling>
	);
}

// Styling
const PortfolioPageStyling = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`;

const MainContent = styled.main`
	display: flex;
	flex-direction: column;
	flex: 1;
`;

export default PortfolioPage;
