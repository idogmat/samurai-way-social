import React from "react";
import s from './Header.module.scss'
import {NavLink} from "react-router-dom";
type HeaderPropsType={
    name:string|null
    fetch:boolean
    logoutUser:()=>void
}
const Header=(props:HeaderPropsType)=>{
    const logout=()=>{
        props.logoutUser()
    }
    // const Menu =[
    // {path:'/profile',point:"Home"},
    // {path:'/login',point:"Login"},
    // ]
    //     const listItems = Menu.map((el,index) =>
    //         <NavLink key={index} to={el.path}>{el.point}</NavLink>);

    return(
        <header className={`${s.header} header`}>
            <img className={s.headerLogo} src="https://t4.ftcdn.net/jpg/04/54/45/09/360_F_454450957_kfkwiM6uoVWQDENLc0N7GM3b6Mz06QAE.jpg" alt="logo"/>

            <div className={s.loginBlock}>
                {props.name
                ? <><NavLink to={'/profile'}>{props.name && props.name}</NavLink>
                        <NavLink onClick={logout} to={'/login'}>LogOut</NavLink>
                    </>
                    :<NavLink to={'/login'}>Login</NavLink>
                }

                {/*<NavLink>Login</NavLink>*/}
                {/*{listItems}*/}
            </div>
        </header>
    )
}
export default Header