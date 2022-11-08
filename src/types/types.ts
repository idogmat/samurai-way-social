import {FriendsType} from "../components/Menu/Menu";
import {PostType} from "../components/Profile/MyPosts/Post/Post";



export type stateType = {
    profilePage: PostsType,
    sidebar: SidebarType,
    messagesPage: {
        dialogs: object[],
        messages: object[]
    }
}
type SidebarType={
    friends:FriendsType[]
    menu:object[]
}
type PostsType=PostType[]

// export type AppTypes={
//     state: {
//         profilePage: object[],
//         sidebar: {
//             friends:object[]
//             menu:object[]
//         }
//         messagesPage: {
//             dialogs:object[],
//             messages:object[]
//         }
//     }}
// export type DialogTypes={
//     messages:{
//         dialogs:object[],
//         messages:object[]
//     }
// }
// export type ProfileTypes={
//     posts: object[]
// }
// export type FriendsTypes={
//     sidebar: {
//         friends:object[]
//         menu:object[]
//     }
// }
// export type PropsType={
//     profilePage:PostType[]
// }
// export type PostType={
//     id:number
//     message:string
//     link:number
// }