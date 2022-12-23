import React, {useRef} from "react";
import p from './ProfileInfo.module.scss'
import Preloader from "../../Preloader/Preloader";
import ProfileStatus from './ProfileStatus'
import {ProfileUserType, savePhoto} from "../../../redux/profileReducer";
import defaultPhoto from '../../../assets/defaultUserPhoto.png'

type ProfileInfoType = {
    user: ProfileUserType
    status: string,
    updateProfileStatusThunkCreator: (s: string) => void
    isOwner:boolean
    savePhoto: (file: string) => void
}

const ProfileInfo = React.memo((props: ProfileInfoType) => {
    // const [editMode, setEditMode] = useState(false);
    const onMainPhotoSelected = (e: { target: any }) => {
        if (e.target.files.length) {
            console.log(e.target.files)
            props.savePhoto(e.target.files[0])
        }
    }
    const ref = useRef<HTMLInputElement>(null)
    return (
        <>{
            !!props.user ?
                <div className={`${p.userInfo} test-ebt`}>
                    <ProfileStatus updateProfileStatusThunkCreator={props.updateProfileStatusThunkCreator}
                                   status={props.status}/>
                    <img className={p.userPhoto} src={props.user.photos.small || defaultPhoto} alt="photos.small"/>
                    <h3>{props.user.fullName}</h3>
                    <p>{props.user.aboutMe}</p>
                    {props.isOwner && <input
                        type={'file'}
                        onChange={(e)=>onMainPhotoSelected(e)}
                    />}

                </div>
                : <Preloader/>
        }
        </>)

});
export default ProfileInfo