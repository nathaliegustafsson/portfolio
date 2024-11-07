import styled from 'styled-components';
import Cv from '../components/Cv';
import Footer from '../components/Footer';
import Header from '../components/Header';

function CvPage() {
	return (
		<CvPageStyling>
			<header>
				<Header />
			</header>
			<MainContent>
				<Cv />
			</MainContent>
			<footer>
				<Footer />
			</footer>
		</CvPageStyling>
	);
}

// Styling
const CvPageStyling = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`;

const MainContent = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	flex: 1;
	overflow-y: auto;
	justify-content: center;
`;

export default CvPage;
