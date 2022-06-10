import { useSelector } from 'react-redux'
import NoteScreen from '../notes/NoteScreen'
import NothingSelected from './NothingSelected'
import SideBar from './SideBar'

const JournalScreen = () => {


    const notesState = useSelector(state => state.notes)

    const { active, notes } = notesState;

    return (
        <div className="journal__main-content">
            <SideBar />

            <main>
                {
                    active
                        ?
                        <NoteScreen />
                        :
                        <NothingSelected /> 

                }

            </main>
        </div>
    )
}

export default JournalScreen