import {SidebarType} from "../../types/types";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";

import Menu from "./Menu";

let mapStateProps=(state:AppStateType):SidebarType=>{
    return state.menuReducer.sidebar
}

const MenuContainer = connect(mapStateProps)(Menu)
export default MenuContainer