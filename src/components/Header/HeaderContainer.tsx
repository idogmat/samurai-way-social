import React, {useEffect} from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {AuthUserType, logoutUser, setFetching, setUserData, setUserThunkCreator} from "../../redux/authReducer";

type UserLoginTypeProps={
    id: number|null
    email: string|null
    login: string|null

    setUserThunkCreator:() =>void
    setUserData:(user: AuthUserType) =>void
    logoutUser:()=>void
    setFetching:(s:boolean)=>void
}

const HeaderContainer=React.memo((props:UserLoginTypeProps)=>{
    console.log('headerCont render')
    useEffect(()=> {
        props.setUserThunkCreator()
    },[])
    return <Header name={props.login} logoutUser={props.logoutUser}/>
})

let mapDispatchToProps=(state:AppStateType)=>{

    return state.authReducer
}
export default connect(mapDispatchToProps,{
    setUserData,
    setFetching,
    logoutUser,
    setUserThunkCreator
})(HeaderContainer)