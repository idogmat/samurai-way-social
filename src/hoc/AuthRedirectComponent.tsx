import {Redirect} from "react-router-dom";
import React, {ComponentType} from "react";
import {AppStateType} from "../redux/redux-store";
import {connect} from "react-redux";

type MapPropsType = {
    isAuth: boolean
}

export function withAuthRedirect<T>(WrapperComponent: ComponentType<T>) {
    const RedirectComponent=(props: MapPropsType)=> {
        let {isAuth,...restProps}=props
        if (!props.isAuth) return <Redirect to={'/login'}/>
        return <WrapperComponent {...restProps as T}/>
    }
    let mapStateToProps = (state: AppStateType):MapPropsType => ({
        isAuth: state.authReducer.isAuth
    })
    let ConnectedRedirectComponent = connect(
        mapStateToProps)
    (RedirectComponent)
    return ConnectedRedirectComponent;
}