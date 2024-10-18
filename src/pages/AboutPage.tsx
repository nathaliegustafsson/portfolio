import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";

function AboutPage() {
    return (
        <div>
        <header>
            <Header />
        </header>
        <main>
            <About />
        </main>
        <footer>
            <Footer />
        </footer>
        </div>
    )
}

export default AboutPage;