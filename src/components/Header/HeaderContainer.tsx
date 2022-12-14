import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    AuthUserType,
    logoutUser,
    logoutUserTC,
    setFetching,
    setUserData,
} from "../../redux/authReducer";

type UserLoginTypeProps = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    setUserData: (user: AuthUserType) => void
    logoutUserTC: () => void
    setFetching: (s: boolean) => void
}

const HeaderContainer = React.memo((props: UserLoginTypeProps) => {
    console.log('headerCont render')

    return <Header id={props.id} isAuth={props.isAuth} name={props.login} logoutUserTC={props.logoutUserTC}/>
})

let mapDispatchToProps = (state: AppStateType) => {

    return state.authReducer
}
export default connect(mapDispatchToProps, {
    setUserData,
    setFetching,
    logoutUser,

    logoutUserTC
})(HeaderContainer)