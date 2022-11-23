import React from 'react';
import { UserType} from "../../redux/usersReducer";
import s from './Users.module.scss'
import defaultUserPhoto from '../../assets/defaultUserPhoto.png'
import {v1} from "uuid";
import {NavLink} from "react-router-dom";

type PropsType={
    users:UserType[]
    follow:(userId:number)=>void
    unFollow:(userId:number)=>void
    setCurrentPage:(s:number)=>void
    pageSize:number,
    totalUsersCount:number,
    currentPage:number,
    onPageChanged:(p:number)=>void
}
const Users = (props:PropsType) => {
    const mappedUsers=props.users.map((el,i)=> {
                return <div key={v1()}>
                    <NavLink to={'/profile/'+el.id}>
                    <img className={s.userPhoto} src={!!el.photos.small ? el.photos.small
                        : defaultUserPhoto} alt={el.photos.small}/>
                    </NavLink>
                    <p>{el.name}</p>
                    <p>{el.status}</p>
                    {el.followed ? <button onClick={() => props.unFollow(el.id)}>followed</button>
                        : <button onClick={() => props.follow(el.id)}>unfollowed</button>
                    }
                </div>
            }
        )

        let pagesCount=Math.ceil(props.totalUsersCount/props.pageSize)-4350
        let pages =[];
        for(let i=1;i<=pagesCount;i++){
            pages.push(i)
        }
        return (
            <div>
                <div>
                    {pages.map((p,i)=><span key={i} onClick={()=>props.onPageChanged(p)}
                                            className={props.currentPage === p ? s.currentPage : ''} >{p}</span>)}
                </div>
                <h2>Users</h2>
                {mappedUsers}
            </div>
        );
};

export default Users;