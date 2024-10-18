import Cv from "../components/CV";
import Footer from "../components/Footer";
import Header from "../components/Header";

function CvPage() {
    return (
        <div>
        <header>
            <Header />
        </header>
        <main>
            <Cv />
        </main>
        <footer>
            <Footer />
        </footer>
        </div>
    )
}

export default CvPage;