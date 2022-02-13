import './Title.css'
const Title = props => {
    return (
        <div className='title'>
            <h1 className="display-4 mt-5">{props.forground[0]}</h1>
            <h1 className="bold-text bg-text">{props.forground[1]}</h1>
        </div>
    )
}

export default Title;