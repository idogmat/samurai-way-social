import React, {useEffect, useState} from 'react';
import s from './ProfileInfo.module.scss'

type PropsType = {
    status: string,
    updateProfileStatusThunkCreator: (s: string) => void
}
const ProfileStatus = (props: PropsType) => {
    const [editMode, setEditMode] = useState(true)
    const [status, setStatus] = useState<any>(props.status||' ')
    const editModeForStatus=()=>{
        setStatus(props.status)
        setEditMode(false)
    }
    const changeInput=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setStatus(e.currentTarget.value)
    }
    const changeStatus=()=>{
        props.updateProfileStatusThunkCreator(status)
        setEditMode(true)
    }
    //http://localhost:3000/profile/8461
    return (
        <div>
            {editMode
                ? <div><span onDoubleClick={editModeForStatus}>{props.status}</span></div>
                : <div><input autoFocus onChange={(e)=>changeInput(e)} value={status}/>
                    <button  onClick={changeStatus} >change</button>
                </div>
            }
        </div>
    );
};

export default ProfileStatus;