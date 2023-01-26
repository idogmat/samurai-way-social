import React from 'react';
import {UserType} from "../../redux/usersReducer";
import s from './Users.module.scss'
import User from "./User";
import Paginator from "./Paginator";

type PropsType = {
    users: UserType[]
    onPageChanged: (p: number) => void
    setFollowThunkCreator:(s:number,type: 'follow' | 'unfollow')=>void
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    followingInProgress: []

}
const Users = React.memo((props: PropsType) => {
    const mappedUsers = props.users.map((el, i) => {
        return <User key={el.id+i+el.name}
                     user={el}
                     followingInProgress={props.followingInProgress}
                     setFollowThunkCreator={props.setFollowThunkCreator}/>
    })

    return (
        <>
            <Paginator totalItemsCount={props.totalUsersCount}
                       pageSize={props.pageSize}
                       currentPage={props.currentPage}
                       onPageChanged={props.onPageChanged}

            />
            <h2>Users</h2>
            <div className={s.usersList}>{mappedUsers}</div>
        </>
    );
})

export default Users;