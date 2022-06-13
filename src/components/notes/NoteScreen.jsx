
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import Swal from "sweetalert2";
import { activeNote, startDeleting } from "../../actions/notes";
import NotesAppBar from "./NotesAppBar"


const NoteScreen = () => {

    const dispatch = useDispatch();

    const { active: note } = useSelector(state => state.notes);

    const[title, setTitle] = useState(note.title);
    const[body, setBody] = useState(note.body);
    const[id, setId] = useState(note.id);
    const[url, setUrl] = useState(note.url);
    const[date, setDate] = useState(note.date);




    const activeId = useRef( note.id );


    useEffect(() => {
        
        if ( note !== activeId.current ) {
            setBody(note.body)
            setId(note.id)
            setTitle(note.title)
            setUrl(note.url)
            setDate(note.date)
            
            activeId.current = note.id
        }
    }, [note])

    useEffect(() => {
        
        dispatch( activeNote( id, {title, body, id, url, date}));

    }, [title, body, id, url, dispatch])



    

    const handleDelete = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'The task file will be deleted...',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it'
        }).then(result => {
            if (result.isConfirmed) {
                dispatch(startDeleting(id));

            }
        })

    }


    return (
        <div className="notes__main-content">
            <NotesAppBar />

            <div className="notes__content">
                <input type="text" placeholder="Some awesome title" name="title" className="notes__title-input" value={title} onChange={(e) => {setTitle(e.target.value)}} />

                <textarea placeholder="What happened today" name="body" className="notes__textarea" value={body} onChange={(e) => {setBody(e.target.value)}}></textarea>
                {
                    url &&
                    <div className="notes__image">
                        <img src={url} alt="imagen" />

                    </div>
                }
            </div>
            <button
                className="btn btn-danger"
                onClick={handleDelete}
            >
                Delete
            </button>
        </div>
    )
}

export default NoteScreen