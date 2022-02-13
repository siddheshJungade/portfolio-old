import './Technology.css';
import TechnologyItem from './technology-item/Technology-item';

import IMAGES from '../../TechItemImg.json'
import Title from '../Title/Title';

const Technology = () => {
    return (

        <div className="info row-1">
        <div className='row info-item'>
            <Title forground={["Technology","Stack I work on"]} />
        <div className='technology'>
            {
                IMAGES.map(item => {
                    const { id, url, title } = item;
                    return <TechnologyItem key={id} image={url} title={title} />
                })
            }
        </div>
        </div>
        </div>
    );
}

export default Technology;