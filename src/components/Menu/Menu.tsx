import React from "react";
import s from './Menu.module.scss'
import {NavLink} from "react-router-dom";
import {FriendType, MenuType, SidebarType} from "../../types/types";

type PropsType ={
    sidebar: SidebarType
}

const Menu = (props:PropsType)=>{
    const friendsList=props.sidebar.friends.map((e:FriendType,index)=><div key={index} className={s.friends}>
        <img src={e.img} alt={e.name}/>
        <p>{e.name}</p>
    </div>)

        const listItems = props.sidebar.menu.map((el:MenuType,index) =>
            <NavLink key={index} activeClassName={s.active} to={el.path}>{el.point}</NavLink>
        );

    return(
        <nav className={`${s.navMenu} nav-menu`}>
            {listItems}
            <div>
                {friendsList}
            </div>
        </nav>
    )
}
export default Menu