import React from 'react'

const NotesAppBar = () => {
    return (
        <div className="notes__appbar">
            <span>26 octubre 2018</span>

            <div>
                <button className="btn pointer">
                    Picture
                </button>
                <button className="btn pointer">
                    Save
                </button>
            </div>
        </div>
    )
}

export default NotesAppBar