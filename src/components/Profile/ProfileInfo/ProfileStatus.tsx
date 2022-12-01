import React, {useState} from 'react';
import s from './ProfileInfo.module.scss'

type PropsType = {
    status: string,
    updateProfileStatusThunkCreator: (s: string) => void
}
const ProfileStatus = (props: PropsType) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)
    const inputRef = React.createRef<any>()
    const editModeForStatus=()=>{
        setStatus(props.status)
        setEditMode(false)
    }
    const changeInput=()=>{
        setStatus(inputRef.current.value)
    }
    const changeStatus=()=>{
        props.updateProfileStatusThunkCreator(status)
        setEditMode(true)
    }
    //http://localhost:3000/profile/8461
    return (
        <div>
            {editMode
                ? <div><span onDoubleClick={editModeForStatus}>{status}</span></div>
                : <div><input ref={inputRef} autoFocus onChange={changeInput} onBlur={changeStatus} value={status}/>
                    <button>change</button>
                </div>
            }
        </div>
    );
};

export default ProfileStatus;