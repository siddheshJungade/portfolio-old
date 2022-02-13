import RESUME from '../../resume.json'
import Title from '../Title/Title';

const Eduction = () => {
    const eduction = RESUME.education
    return (
        <div>
            <div className="info row-1">
                <div className='row info-item'>
                    <div className="col-1">
                        <Title forground={eduction.intro} />
                        {eduction.work.map((work,id) => {
                            return <div className='work-col' key={id}>
                                <div className="display-1"><h4>{work["Course"]}</h4>
                                    <p>
                                        {work["Institute"]}
                                    </p>
                                </div>
                                <div>
                                    {work.year ? <p>{ work.time }</p>: ""}
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>);
}


export default Eduction;