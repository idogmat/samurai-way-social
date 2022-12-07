import React, {useEffect} from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    AuthUserType,
    logoutUser,
    logoutUserTC,
    setFetching,
    setUserData,
    setUserThunkCreator
} from "../../redux/authReducer";

type UserLoginTypeProps = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    setUserThunkCreator: () => void
    setUserData: (user: AuthUserType) => void
    logoutUserTC: () => void
    setFetching: (s: boolean) => void
}

const HeaderContainer = React.memo((props: UserLoginTypeProps) => {
    console.log('headerCont render')
    useEffect(() => {
        props.setUserThunkCreator()
    }, [])
    return <Header isAuth={props.isAuth} name={props.login} logoutUserTC={props.logoutUserTC}/>
})

let mapDispatchToProps = (state: AppStateType) => {

    return state.authReducer
}
export default connect(mapDispatchToProps, {
    setUserData,
    setFetching,
    logoutUser,
    setUserThunkCreator,
    logoutUserTC
})(HeaderContainer)