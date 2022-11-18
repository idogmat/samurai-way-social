import React from 'react';
import {UsersType, UserType} from "../../redux/usersReducer";
import s from './Users.module.scss'
type PropsType={
    users:UserType[]
    follow:(userId:number)=>void
    unFollow:(userId:number)=>void
    setUsers:(s:UserType[])=>void
}
const Users = (props:PropsType) => {
    if(props.users.length===0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://img.freepik.com/premium-vector/female-user-profile-avatar-is-woman-character-screen-saver-with-emotions_505620-617.jpg?w=2000',
                followed: true,
                fullName: "Jack",
                status: "I'm boss",
                location: {city: 'Antalya', country: 'Turkiye'}
            },
            {
                id: 2,
                photoUrl: 'https://img.freepik.com/premium-vector/female-user-profile-avatar-is-woman-character-screen-saver-with-emotions_505620-617.jpg?w=2000',
                followed: false,
                fullName: "Husain",
                status: "I'm ..",
                location: {city: 'Stambul', country: 'Turkiye'}
            },
            {
                id: 3,
                photoUrl: 'https://img.freepik.com/premium-vector/female-user-profile-avatar-is-woman-character-screen-saver-with-emotions_505620-617.jpg?w=2000',
                followed: true,
                fullName: "Aron",
                status: "I'm ***",
                location: {city: 'Kony', country: 'Turkiye'}
            },
        ])
    }
    let mappedUsers=props.users.map(el=> {
        return <div key={el.id}>
            <img className={s.userPhoto} src={el.photoUrl} alt="photoUrl"/>
            <p>{el.fullName}</p>
            {el.followed ? <button onClick={() => props.unFollow(el.id)}>followed</button>
                : <button onClick={() => props.follow(el.id)}>unfollowed</button>
            }
        </div>
    }
)
    return (
        <div>
            {/*<button onClick={props.setUsers}>11111111</button>*/}
            <h2>Users</h2>
            {mappedUsers}
        </div>
    );
};

export default Users;