
import './Social.css';

const Social = (props) => {
    return (
        <div className="social">
            <div className="social__item">
                <a href='mailto:siddheshjungade@gmail.com' target="_blank" rel="noreferrer" ><i className="far fa-envelope fa-2x"></i></a>
                <a href='https://twitter.com/siddheshjungade' target="_blank" rel="noreferrer"><i className="fab fa-twitter fa-2x"></i></a>
                <a href='https://github.com/siddheshJungade' target="_blank" rel="noreferrer"><i className="fab fa-github-alt fa-2x"></i></a>
                <a href='https://www.linkedin.com/in/siddhesh-jungade/' target='_black' rel="noreferrer"><i className="fab fa-linkedin fa-2x"></i></a>
                <a href='https://brothepro.hashnode.dev/' target='_blank' rel="noreferrer"><i className="fas fa-blog fa-2x"></i></a>
                <a href='https://www.instagram.com/siddheshjungade/' target='_blank'  rel="noreferrer"><i className="fab fa-instagram fa-2x"></i></a>
            </div>
        </div>
    );
}

export default Social;