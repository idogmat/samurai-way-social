import React from "react";
import s from './Menu.module.scss'
const Menu=()=>{
        const menu = [
            {path: '#', point: "Profile"},
            {path: '#', point: "Messages"},
            {path: '#', point: "News"},
            {path: '#', point: "Music"},
            {path: '#', point: "Settings"}
        ]
        const listItems = menu.map((el) =>
            <a href={el.path}>{el.point}</a>
        );

    return(
        <nav className={`${s.navMenu} nav-menu`}>
            {listItems}
        </nav>
    )
}
export default Menu