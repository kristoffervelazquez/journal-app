import moment from 'moment';
import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notes';


const JournalEntry = (note) => {
    
    const { id, title, body, date, url } = note

    const dispatch = useDispatch();
    const noteDate = moment(date);


    const handleEntrieClick = (id, note) => {
        dispatch(activeNote(id, note ))
        
    }

    return (
        <div onClick={() => {handleEntrieClick(id, note)}} className="journal__entry pointer">
            {
                url &&
                <div className="journal__entry-picture"
                    style={{
                        backgroundSize: 'cover',
                        backgroundImage: `url(${url})`
                    }}
                >

                </div>
            }
            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    {title}
                </p>
                <p className="journal__entry-content">
                    {body}
                </p>
            </div>
            <div className="journal__entry-date-box">
                <span>{noteDate.format('dddd')}</span>
                <h4>{noteDate.format('Do')}</h4>
            </div>
        </div>
    )
}

export default JournalEntry