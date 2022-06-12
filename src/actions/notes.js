import { db } from '../firebase/firebaseConfig'
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore'
import { types } from '../types/types';
import { loadNotes } from '../helpers/loadNotes';
import Swal from 'sweetalert2';
import { fileUpload } from '../helpers/fileUpload';

export const startNewNote = () => {

    return async (dispatch, getState) => {
        const uid = getState().auth.uid;       

        console.log(uid)
        
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        try {
            const doc = await addDoc(collection(db, `${uid}/journal/notes`), newNote);
            dispatch(activeNote(doc.id, newNote));

        } catch (e) {
            console.log(e)
        }
    }
}


export const activeNote = (id, note) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note
    }
});

export const startLoadingNotes = (uid) => {
    return async(dispatch) => {
        const notes = await loadNotes(uid);
        dispatch(setNotes(notes))
    }
}

export const setNotes = (notes) => ({
    type: types.notesLoad,
    payload: {
        notes
    }
});

export const startSaveNote = (note) => {
    return async (dispatch, getState) => {
        const uid = getState().auth.uid;
        
        if ( !note.url ){
            delete note.url;
        }

        const {id, ...noteToFireStore} = note;

        const noteRef = doc(db, `${uid}/journal/notes/${id}`)
        await updateDoc(noteRef, noteToFireStore);
        dispatch(refreshNote(id, noteToFireStore));
    }
}


export const refreshNote = (id, note) => ({
    type: types.notesUpdated,
    payload:{
        id,
        note: {
            id,
            ...note
        }
    }
});

export const startUploading = file => {
    return async( dispatch, getState ) => {

        const { active:activeNote } = getState().notes;

        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait...',
            allowOutsideClick: false,
            onBeforeOpen: () => {
                Swal.showLoading();
            }
        });

        const fileUrl = await fileUpload( file );
        activeNote.url = fileUrl;

        dispatch( startSaveNote( activeNote ) )
        

        Swal.close();

        
    }
}


