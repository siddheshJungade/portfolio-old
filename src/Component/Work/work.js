// import Title from "../Title/Title";
import Info from "../Info/Info";

import RESUME from '../../resume.json'

const Work = () => {
    const workDon = RESUME.Experience
    const project = RESUME.Projects
    return <div>
        <Info detail = {workDon}/>
        <Info detail = {project}/>
    </div>

}


export default Work;