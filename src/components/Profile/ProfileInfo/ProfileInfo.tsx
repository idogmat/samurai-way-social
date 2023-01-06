import React, {ChangeEvent, FC, useRef, useState} from "react";
import p from './ProfileInfo.module.scss'
import Preloader from "../../Preloader/Preloader";
import ProfileStatus from './ProfileStatus'
import {ContactsType, ProfileUserType, saveProfile} from "../../../redux/profileReducer";
import defaultPhoto from '../../../assets/defaultUserPhoto.png'
import ProfileDataFormReduxForm from "./ProfileDataForm";

type ProfileInfoType = {
  user: ProfileUserType
  status: string,
  updateProfileStatusThunkCreator: (s: string) => void
  isOwner: boolean
  savePhoto: (file: string) => void
  saveProfile:(data:any)=>void
}

const ProfileInfo: FC<ProfileInfoType> = React.memo(({
                                                       user,
                                                       updateProfileStatusThunkCreator,
                                                       status,
                                                       savePhoto,
                                                       isOwner,
                                                       saveProfile
                                                     }) => {
  const [editMode, setEditMode] = useState(false);
  const ref = useRef<HTMLInputElement>(null);
  const onMainPhotoSelected = (e: ChangeEvent<any>) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  }
  const onSubmit =(formData:ProfileUserType)=>{
    saveProfile(formData)
    setEditMode(false)
  }
  return (
    <>{
      !!user ?
        <div className={`${p.userInfo} test-ebt`}>
          <ProfileStatus updateProfileStatusThunkCreator={updateProfileStatusThunkCreator}
                         status={status}/>
          <img className={p.userPhoto} src={user.photos.small || defaultPhoto} alt="photos.small"/>
          {editMode ? <ProfileDataFormReduxForm initialValues={user} onSubmit={onSubmit}/>
          :<ProfileData {...user} isOwner={isOwner} setEditMode={setEditMode}/>}
          {isOwner && <>
              <button
                  onClick={() => ref.current?.click()}
              >LoadPhoto
              </button>
              <input
                  type={'file'}
                  accept={'image/*'}
                  style={{display: "none"}}
                  ref={ref}
                  onChange={onMainPhotoSelected}
              /></>}

        </div>
        : <Preloader/>
    }
    </>)

});
const ProfileData: FC<ProfileUserType&{isOwner:boolean}& { setEditMode: (b: boolean) => void } > = ({setEditMode,isOwner,fullName, aboutMe, lookingForAJob, lookingForAJobDescription, contacts}) => {
  return <>
    <div>{isOwner && <button onClick={()=>setEditMode(true)}>edit</button>}</div>
    <h3>{fullName}</h3>
    <p>{aboutMe}</p>
    <div><p>Looking for a job: {lookingForAJob ? "Yes" : "No"}</p></div>
    {lookingForAJob && <p>My professional skills: {lookingForAJobDescription}</p>}
    <div><p>My professional skills: </p></div>
    <div>Contacts: {Object.keys(contacts).map((key) => {
      return <Contact key={key} contactTitle={key} contactValue={contacts[key as keyof ContactsType]}/>
    })}</div>
  </>
}

interface IContact {
  contactTitle: string,
  contactValue: string
}

const Contact: FC<IContact> = ({contactTitle, contactValue}) => {
  return <div><b>{contactTitle}:</b>{contactValue}</div>
}

export default ProfileInfo;