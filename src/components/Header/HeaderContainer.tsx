import React, {useEffect} from "react";
import s from './Header.module.scss'
import {NavLink} from "react-router-dom";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {AuthUserType, logoutUser, setFetching, setUserData} from "../../redux/authReducer";
import {authMe} from "../../api/api";
type UserLoginTypeProps={
    id: number|null
    email: string|null
    login: string|null
    isFetching:boolean,

    setUserData:(user: AuthUserType) =>void
    logoutUser:()=>void
    setFetching:(s:boolean)=>void
}

const HeaderContainer=(props:UserLoginTypeProps)=>{
    // debugger
    // const Menu =[
    // {path:'/profile',point:"Home"},
    // {path:'/login',point:"Login"},
    // ]
    //     const listItems = Menu.map((el,index) =>
    //         <NavLink key={index} to={el.path}>{el.point}</NavLink>);

    useEffect(()=> {
        props.setFetching(false)
        authMe()
            .then(response => {
                props.setUserData({...response.data})
                props.setFetching(true)
            }).catch(err=>{
                throw new Error(err)
        })
    },[])
    return <Header name={props.login} fetch={props.isFetching} logoutUser={props.logoutUser}/>
}

let mapDispatchToProps=(state:AppStateType)=>{

    return state.authReducer
}
export default connect(mapDispatchToProps,{
    setUserData,
    setFetching,
    logoutUser
})(HeaderContainer)