import HighPriorityCard from './HighPriorityCard';
import AISuggestionCard from './AISuggestionCard';
import { timeConversion } from '../../assets/js/timeConversion';
const LogCard =(props) => {
    let convertedTime = timeConversion(props.log.ts);
    return(
        <div className="error-card">
            <div className="vartana-section">
            <div className="vartana-text">{props.log.data.applicationName}</div>
            </div>
            <div className="error-card-content">
            <div className="error-header">
                <p className="time">{convertedTime.date}</p>
                <p className="time">{convertedTime.time}</p>
                <h4>{props.log.data.errorCode}</h4>
                <p className='text'>Use audio to have live conversations with other collaborators directly in your Figma and FigJam files.</p>
            </div>
            </div>
            <div className="error-card-suggestions">
            <HighPriorityCard />

            {/* only show on the latest card */}
            {props.index === 0 && <AISuggestionCard /> }
            {/* <p className="error-footer">Last occurrence: 16 hrs ago</p> */}
            </div>
            <div className="button-section">
            <button className="round-button">→</button>
            <button className="round-button">→</button>
            </div>
        </div>
    )
}

export default LogCard;