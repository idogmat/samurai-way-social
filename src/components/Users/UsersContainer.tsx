import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    follow,
    setCurrentPage, setFetching, setTotalUsersCount,
    setUsers,
    unFollow,
    UsersType,
    UserType
} from "../../redux/usersReducer";
import React, {Component} from "react";
import axios from "axios";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";

type PropsType = {
    users: UserType[]
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (s: UserType[]) => void
    setCurrentPage: (s: number) => void
    setTotalUsersCount: (s: number) => void
    setFetching:(f:boolean)=>void
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
    isFetching: boolean
}

class UsersComponent extends Component<PropsType> {

    componentDidMount() {
        this.props.setFetching(false)
        console.log('I\'m inside on DOM')
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
                this.props.setFetching(true)
            })
    }

    onPageChanged = (p: number) => {
        this.props.setFetching(false)
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setFetching(true)
            })
    }

    render() {
        return <>
            {this.props.isFetching ?
                <Users users={this.props.users}
                       follow={this.props.follow}
                       unFollow={this.props.unFollow}
                       setCurrentPage={this.props.setCurrentPage}
                       currentPage={this.props.currentPage}
                       totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       onPageChanged={this.onPageChanged}


                />
                : <Preloader/>
            }
        </>
    }
}


let mapStateToProps = (state: AppStateType): UsersType => {
    return state.usersReducer
}
// let mapDispatchToProps = (dispatch: (action: ActionUserType) => void) => {
//     return {
//         follow: (userId: number) => {
//             dispatch(followAC(userId))
//         },
//         unFollow: (userId: number) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users: UserType[]) => {
//             dispatch(setUsers(users))
//         },
//         setCurrentPage: (page: number) => {
//             dispatch(setCurrentPageAC(page))
//         },
//         setTotalUsersCount: (totalUsers: number) => {
//             dispatch(setTotalUsersCountAC(totalUsers))
//         },
//         setFetching: (fetch: boolean) => {
//             dispatch(setFetchingAC(fetch))
//         }
//     }
// }
// const UsersContainer=connect(mapStateToProps,mapDispatchToProps)(Users)

const UsersContainer = connect(mapStateToProps,  {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setFetching
})(UsersComponent)
export default UsersContainer;