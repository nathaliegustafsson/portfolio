import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';

function ContactPage() {
	return (
		<div>
			<header>
				<Header />
			</header>
			<main>
				<Contact />
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default ContactPage;
