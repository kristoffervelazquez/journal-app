import moment from 'moment';
import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notes';


const JournalEntry = ({ id, title, body, date, url}) => {
        
    const dispatch = useDispatch();
    const noteDate = moment(date);


    const handleEntrieClick = () => {
        dispatch(activeNote(id, {
            date, title, body, url
        } ))
        
    }

    return (
        <div onClick={handleEntrieClick} className="journal__entry pointer">
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