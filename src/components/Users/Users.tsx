import React from 'react';
import {UserType} from "../../redux/usersReducer";
import s from './Users.module.scss'
import defaultUserPhoto from '../../assets/defaultUserPhoto.png'
import {NavLink} from "react-router-dom";
import {followersAPI} from "../../api/api";

type PropsType = {
    users: UserType[]
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setCurrentPage: (s: number) => void
    onPageChanged: (p: number) => void
    setFollowDisable:(u:number,f:boolean)=>void
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    followingInProgress:[]

}
const Users = (props: PropsType) => {
    const mappedUsers = props.users.map((el, i) => {
            return <div key={i+el.name}>
                <NavLink to={'/profile/' + el.id}>
                    <img className={s.userPhoto} src={!!el.photos.small ? el.photos.small
                        : defaultUserPhoto} alt={el.photos.small}/>
                </NavLink>
                <p>{el.name}</p>
                <p>{el.status}</p>
                {el.followed ? <button disabled={props.followingInProgress.some(id=>id===el.id)} onClick={() => {
                        props.setFollowDisable(el.id,true)
                        followersAPI.unfollowRequestUser(el.id)
                            .then(response => {
                                console.log(response)
                                response.data.resultCode === 0 && props.unFollow(el.id)
                            }).catch(err=>{
                            console.log(err)
                        }).finally(()=>{
                            props.setFollowDisable(el.id,false)
                        })

                    }}>followed</button>
                    : <button disabled={props.followingInProgress.some(id=>id===el.id)} onClick={() => {
                        props.setFollowDisable(el.id,true)
                        followersAPI.followRequestUser(el.id)
                            .then(response => {
                                console.log(response)
                                response.data.resultCode === 0 && props.follow(el.id)
                            }).catch(err=>{
                            console.log(err)
                        }).finally(()=>{
                            props.setFollowDisable(el.id,false)
                        })

                    }}>unfollowed</button>
                }
            </div>
        }
    )

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize) - 4350
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map((p, i) => <span key={i} onClick={() => props.onPageChanged(p)}
                                           className={props.currentPage === p ? s.currentPage : ''}>{p}</span>)}
            </div>
            <h2>Users</h2>
            {mappedUsers}
        </div>
    );
};

export default Users;