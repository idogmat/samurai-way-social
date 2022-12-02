import React, {useEffect, useState} from 'react';
import s from './ProfileInfo.module.scss'

type PropsType = {
    status: string,
    updateProfileStatusThunkCreator: (s: string) => void
}
const ProfileStatus = (props: PropsType) => {
    const [editMode, setEditMode] = useState(true)
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
                ? <div><span onDoubleClick={editModeForStatus}>{props.status||'text'}</span></div>
                : <div><input ref={inputRef} autoFocus onChange={changeInput} value={status}/>
                    <button  onClick={changeStatus} >change</button>
                </div>
            }
        </div>
    );
};

export default ProfileStatus;