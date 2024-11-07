import styled from 'styled-components';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';

function ContactPage() {
	return (
		<ContactPageStyling>
			<header>
				<Header />
			</header>
			<MainContent>
				<Contact />
			</MainContent>
			<footer>
				<Footer />
			</footer>
		</ContactPageStyling>
	);
}

// Styling
const ContactPageStyling = styled.div`
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

export default ContactPage;
