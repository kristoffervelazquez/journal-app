
import NoteScreen from '../notes/NoteScreen'
import NothingSelected from './NothingSelected'
import SideBar from './SideBar'

const JournalScreen = () => {
    return (
        <div className="journal__main-content">
            <SideBar />

            <main>
                {/* <NothingSelected /> */}
                <NoteScreen />

            </main>
        </div>
    )
}

export default JournalScreen