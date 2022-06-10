import { db } from "../firebase/firebaseConfig"
import { getDocs, collection } from "firebase/firestore"

export const loadNotes = async (uid) => {
    const notesSnap = await getDocs(collection(db, `${uid}/journal/notes/`));
    const notes = []
    

    // console.log(notesSnap.docs[0]._document.data.value.mapValue.fields)

    notesSnap.forEach(snapHijo => {
        notes.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
       
    })
    
    
    return notes;
}