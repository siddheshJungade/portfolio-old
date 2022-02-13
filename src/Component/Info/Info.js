import './Info.css'
import Title from '../Title/Title';

import "../../resume.json"

const Info = (props) => {
    return (
        <div>
            <div className="info row-1">
                <div className='row info-item'>
                    <div className="col-1">
                        <Title forground={props.detail.intro} />
                        { props.detail.work.map((work, id) => {
                            return (
                                <div key={id}> 
                                <div className='work-col'>
                                    <div className="display-1"><h4>{work["title"]}</h4>
                                        <p>
                                            <a href={work["website"] ? work["website"] : "#"} target="_black" >{work["organization"] ? work["organization"] : work["tech"]}</a>
                                        </p>
                                    </div>
                                    <div>
                                        <p>{work.time ? work.time : ""}</p>
                                    </div>
                                    <div className="py-4">
                                        {work.desc.map((dec,id) => {
                                            return <li key={id} className="li-color">{dec}</li>
                                        })}
                                    </div>
                                </div>
                            </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info;