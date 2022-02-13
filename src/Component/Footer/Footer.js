
import Social from "../Social/Social";
import './Footer.css'



const Footer = () => {
    return (
        <footer className="footer">
            <Social />
            <h2 className="text-center">If you like my work, you can <a href='https://www.buymeacoffee.com/siddheshjungade' target='_blank'  rel="noreferrer" className="bmc">buy me a coffee</a> and share your thoughts</h2>
        </footer>
    );
}

export default Footer;