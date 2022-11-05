import React from "react";
import s from './Header.module.scss'
const Header=()=>{
    const Menu =[
    {path:'#',point:"Home"},
    {path:'#',point:"News Feed"},
    {path:'#',point:"Messages"}
    ]
        const listItems = Menu.map((el) =>
            <a href={el.path}>{el.point}</a>
    );
    return(
        <header className={`${s.header} header`}>
            <img className={s.headerLogo} src="https://t4.ftcdn.net/jpg/04/54/45/09/360_F_454450957_kfkwiM6uoVWQDENLc0N7GM3b6Mz06QAE.jpg" alt="logo"/>
            {listItems}
        </header>
    )
}
export default Header