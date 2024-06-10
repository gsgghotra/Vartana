import HighPriorityCard from './HighPriorityCard';
import AISuggestionCard from './AISuggestionCard';
const LogCard =() => {
    return(
        <div className="error-card">
            <div className="vartana-section">
            <div className="vartana-text">VARTANA</div>
            </div>
            <div className="error-card-content">
            <div className="error-header">
                <p className="time">12:30:57</p>
                <h4>Error (CODE)</h4>
                <p className='text'>Use audio to have live conversations with other collaborators directly in your Figma and FigJam files.</p>
            </div>
            </div>
            <div className="error-card-suggestions">
            <HighPriorityCard />
            <AISuggestionCard />
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