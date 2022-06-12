
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux"
import { activeNote } from "../../actions/notes";
import { useForm } from "../../hooks/useForm";
import NotesAppBar from "./NotesAppBar"


const NoteScreen = () => {

    const dispatch = useDispatch();

    const { active:note } = useSelector( state => state.notes );
    const [ formValues, handleInputChange, reset ] = useForm( note );
    const { body, title, id } = formValues;

    const activeId = useRef( note.id );

    useEffect(() => {
        
        if ( note.id !== activeId.current ) {
            reset( note );
            activeId.current = note.id
        }

    }, [note, reset])

    useEffect(() => {
        
        dispatch( activeNote( formValues.id, { ...formValues } ) );

    }, [formValues, dispatch])
    

    return (
        <div className="notes__main-content">
            <NotesAppBar />

            <div className="notes__content">
                <input type="text" placeholder="Some awesome title" name="title" className="notes__title-input" value={title} onChange={handleInputChange} />

                <textarea placeholder="What happened today" name="body" className="notes__textarea" value={body} onChange={handleInputChange}></textarea>
                {
                    note.url &&
                    <div className="notes__image">
                        <img src={note.url} alt="imagen" />

                    </div>
                }
            </div>
        </div>
    )
}

export default NoteScreen