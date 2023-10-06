import './Contact.css';
import Navbar from "./../../components/Navbar/Navbar";
import Footer from "./../../components/Footer/Footer";

export default function Contact() {
    return(
        <div className='contact-container'> 
            <Navbar />
            <h1>Contact</h1>
            <p>
                This is the home page. It is a React Component as a view.
            </p>
            <Footer />
        </div>
    )
}