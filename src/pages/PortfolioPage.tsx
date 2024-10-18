import Footer from "../components/Footer";
import Header from "../components/Header";
import Portfolio from "../components/Portfolio";

function PortfolioPage() {
    return (
        <div>
        <header>
            <Header />
        </header>
        <main>
            <Portfolio />
        </main>
        <footer>
            <Footer />
        </footer>
        </div>
    )
}

export default PortfolioPage;