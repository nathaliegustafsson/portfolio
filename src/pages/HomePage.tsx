import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../components/Home";

function HomePage() {
    return (
        <div>
        <header>
            <Header />
        </header>
        <main>
            <Home />
        </main>
        <footer>
            <Footer />
        </footer>
        </div>
    )
}

export default HomePage;