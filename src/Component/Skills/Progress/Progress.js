import './Progress.css'
const Progress = () => {
    return (
        <div>
            <div className="skill-name">Devops</div>
            <progress id="progress-item" value="32" max="100"></progress>
        </div>
    )
}

export default Progress;