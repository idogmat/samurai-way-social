import React, {useCallback} from "react";
import s from './Header.module.scss'
import {NavLink} from "react-router-dom";

type HeaderPropsType={
    id:number |null
    name:string|null
    isAuth:boolean
    logoutUserTC:()=>void
}
const Header=React.memo((props:HeaderPropsType)=>{
    const logout=useCallback(()=>{
        props.logoutUserTC()
    },[props.name])
    return(
        <header className={`${s.header} header`}>
            <img className={s.headerLogo} src="https://t4.ftcdn.net/jpg/04/54/45/09/360_F_454450957_kfkwiM6uoVWQDENLc0N7GM3b6Mz06QAE.jpg" alt="logo"/>

            <div className={s.loginBlock}>
                {props.isAuth
                ? <><NavLink to={'/profile/'+props.id}>{props.name && props.name}</NavLink>
                        <NavLink onClick={logout} to={'/login'}>LogOut</NavLink>
                    </>
                    :<NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
})
export default Header