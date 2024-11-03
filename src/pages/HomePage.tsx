import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Home from '../components/Home';

function HomePage() {
	return (
		<HomePageStyling>
			<header>
				<Header />
			</header>
			<MainContent>
				<Home />
			</MainContent>
			<footer>
				<Footer />
			</footer>
		</HomePageStyling>
	);
}

// Styling
const HomePageStyling = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`;

const MainContent = styled.main`
	display: flex;
	justify-content: center;
	flex-direction: column;
	flex: 1;
`;

export default HomePage;
