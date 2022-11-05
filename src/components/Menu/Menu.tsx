import React from "react";
import s from './Menu.module.scss'
import {NavLink} from "react-router-dom";
const Menu=()=>{
        const menu = [
            {path: '/profile', point: "Profile"},
            {path: '/messages', point: "Messages"},
            {path: '/news', point: "News"},
            {path: '/music', point: "Music"},
            {path: '/settings', point: "Settings"}
        ]
        const listItems = menu.map((el) =>
            <NavLink activeClassName={s.active} to={el.path}>{el.point}</NavLink>
        );

    return(
        <nav className={`${s.navMenu} nav-menu`}>
            {listItems}
        </nav>
    )
}
export default Menu