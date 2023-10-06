import './About.css';
import Navbar from "./../../components/Navbar/Navbar";
import Footer from "./../../components/Footer/Footer";

export default function About() {
    return(
        <div className='about-container'>
            <Navbar />
            <h1>About</h1>
            <p>
                This is the home page. It is a React Component as a view.
            </p>
            <Footer />
        </div>
    )
}