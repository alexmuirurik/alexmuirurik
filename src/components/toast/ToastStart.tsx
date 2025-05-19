import React from 'react'

const ToastStart = ({message}:any) => {    
    return (
        <div className="toast toast-end toast-top z-50 animate-pulse" id='toastStart' >
            <div className="alert alert-success">
                <span>{message}.</span>
            </div>
        </div>
    )
}

export default ToastStart