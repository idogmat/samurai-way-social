import React from 'react';
import {UserType} from "../../redux/usersReducer";
import s from './Users.module.scss'
import User from "./User";

type PropsType = {
    users: UserType[]
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setCurrentPage: (s: number) => void
    onPageChanged: (p: number) => void
    setFollowDisable: (u: number, f: boolean) => void
    setFollowThunkCreator:(s:number,type: 'follow' | 'unfollow')=>void
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    followingInProgress: []

}
const Users = React.memo((props: PropsType) => {
    console.log('Users')
    const mappedUsers = props.users.map((el, i) => {
        return <User key={el.id+i+el.name}
                     user={el}
                     followingInProgress={props.followingInProgress}
                     setFollowDisable={props.setFollowDisable}
                     follow={props.follow}
                     unFollow={props.unFollow}
                     setFollowThunkCreator={props.setFollowThunkCreator}/>
    })

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize) - 4350;
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
})

export default Users;