import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment';
import { startSaveNote, startUploading } from '../../actions/notes';

const NotesAppBar = () => {
    
    const dispatch = useDispatch();
    const {active} = useSelector(state => state.notes)

    console.log(active);
    const handleSave = () => {
        dispatch(startSaveNote(active))
        console.log('saved');
    }   

    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click();
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if(file){
            dispatch(startUploading(file))
        }
    }

    const noteDate = (moment(active.date))

    return (
        <div className="notes__appbar">
            <span>{noteDate.format('Do MMMM Y')}</span>

            <input 
                id="fileSelector"
                type="file"
                name="file"
                style={{ display: 'none'}}
                onChange={handleFileChange}                
            />


            <div>
                <button onClick={handlePictureClick} className="btn pointer">
                    Picture
                </button>
                <button  onClick={handleSave} id="save-btn" className="btn pointer">
                    Save
                </button>
            </div>
        </div>
    )
}

export default NotesAppBar