import React from "react";
import p from './ProfileInfo.module.scss'
import Preloader from "../../Preloader/Preloader";
import ProfileStatus from './ProfileStatus'
import {ProfileUserType, updateProfileStatusThunkCreator} from "../../../redux/profileReducer";
import defaultPhoto from '../../../assets/defaultUserPhoto.png'

type ProfileInfoType = {
    user: ProfileUserType
    status: string,
    updateProfileStatusThunkCreator: (s: string) => void
}

const ProfileInfo = (props: ProfileInfoType) => {

    return (
        <>{
            !!props.user ?

                <div className={`${p.userInfo} test-ebt`}>
                    <ProfileStatus updateProfileStatusThunkCreator={props.updateProfileStatusThunkCreator}
                                   status={props.status}/>
                    <img className={p.userPhoto} src={props.user.photos.small || defaultPhoto} alt="photos.small"/>
                    <h3>{props.user.fullName}</h3>
                    <p>{props.user.aboutMe}</p>
                </div>
                : <Preloader/>
        }
        </>)

}
export default ProfileInfo