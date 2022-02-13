import Social from '../Social/Social';
import Title from '../Title/Title';
// import Progress from './Progress/Progress';
import './Skills.css';

import RESUME from '../../resume.json'

const Skills = () => {
    return (
        <div className="info row-1">

            <div className='row  info-item'>
                <Title forground={RESUME.intro} />
                <h2>Hello!</h2>
                <div className="skill-item">
                    <div className="col-1">
                        <p className='skill-info'>
                            My name is Siddhesh. I’m a junior from 🇮🇳 I'm an Software Development enthusiast, A learner📕 who is deeply <br /> passionate about software development & innovations.
                        </p> 
                        <Social link={RESUME.link} />
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Skills