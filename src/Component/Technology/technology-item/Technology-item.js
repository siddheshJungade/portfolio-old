

import './Technology-item.css';

const TechnologyItem = (props) => {
    return (
        <div className='grid-item'>
            <img  src={props.image} alt="hello"/>
            <p className='tech-title'> {props.title}</p>
        </div>
    );
}


export default TechnologyItem;