import React, {FC} from "react";
import s from './Menu.module.scss'
import {NavLink} from "react-router-dom";
import {FriendsTypes} from "../../types/types";

interface ISidebarTypes{
    sidebar:{
        friends:object[]
        menu:object[]
    }
}
const Menu:FC<ISidebarTypes>=(props:FriendsTypes)=>{

    const friendsList=props.sidebar.friends.map((e:any)=><div className={s.friends}>
        <img src={e.img} alt={e.id}/>
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