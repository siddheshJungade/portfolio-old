import './Hero.css'
import Profile from './profile.jpg'
const Hero = () => {
    return (
        <div>
            <nav className="nav-bar">
                <div className="nav-bar-title">
                    <a rel='noreferrer' href="https://drive.google.com/file/d/1V8_2JihbsDJhaYHtAVpcepa7C7jezLxw/view" target="_blank">Resume</a>
                </div>
            </nav>
            <section className="landing">
                <div className="row vertical-center">
                    <div className="col-2 text-left">
                        <h1 className="display-3">Siddhesh Jungade</h1>
                        <p className="lead pl-2">Computer Science Undergrad, Passionate about Software Development.</p>
                    </div>
                    <div className="col-2 profile-img">
                        <img src={Profile} alt="profileImage"></img>
                    </div>
                </div>
            </section>
        </div>
    );
}


export default Hero;