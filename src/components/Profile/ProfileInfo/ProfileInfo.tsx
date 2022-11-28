import React from "react";
import p from './ProfileInfo.module.scss'
import Preloader from "../../Preloader/Preloader";
import {ProfileUserType} from "../../../redux/profileReducer";


const ProfileInfo = (props:{user:ProfileUserType}) => {

    return (
        <>{
            props.user ?
                <div className={`${p.userInfo} test-ebt`}>
                    <img className={p.userPhoto} src={!!props.user ? props.user.photos.small : ''} alt="photos.small"/>
                    <h3>{props.user.fullName}</h3>
                    <p>{props.user.aboutMe}</p>
                </div>
                : <Preloader/>
        }
        </>)

}
export default ProfileInfo