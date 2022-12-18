import React from 'react';
import {UserType} from "../../redux/usersReducer";
import s from './Users.module.scss'
import defaultUserPhoto from '../../assets/defaultUserPhoto.png'
import {NavLink} from "react-router-dom";


type PropsType = {
    user: UserType
    setFollowThunkCreator:(s:number,type: 'follow' | 'unfollow')=>void
    followingInProgress:[]

}
const User = React.memo((props: PropsType) => {
    return <div key={props.user.name}>
        <NavLink to={'/profile/' + props.user.id}>
            <img className={s.userPhoto} src={!!props.user.photos.small ? props.user.photos.small
                : defaultUserPhoto} alt={props.user.photos.small}/>
        </NavLink>
        <p>{props.user.name}</p>
        <p>{props.user.status}</p>
        {props.user.followed ? <button disabled={props.followingInProgress.some(id=>id===props.user.id)} onClick={() => {
           props.setFollowThunkCreator(props.user.id,'unfollow')
            }}>followed</button>
            : <button disabled={props.followingInProgress.some(id=>id===props.user.id)} onClick={() => {
                props.setFollowThunkCreator(props.user.id,'follow')
            }}>unfollowed</button>
        }
    </div>
})

export default User;