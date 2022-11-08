import React from "react";
import s from './Menu.module.scss'
import {NavLink} from "react-router-dom";

export type SidebarType={
        sidebar: {
        friends:FriendsType[]
        menu:object[]
    }
}
export type FriendsType={
    id:number
    name:string
    img:string
}
const Menu=(props:SidebarType)=>{
    const friendsList=props.sidebar.friends.map((e:FriendsType)=><div className={s.friends}>
        <img src={e.img} alt={e.name}/>
        <p>{e.name}</p>
    </div>)

        const listItems = props.sidebar.menu.map((el:any) =>
            <NavLink activeClassName={s.active} to={el.path}>{el.point}</NavLink>
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