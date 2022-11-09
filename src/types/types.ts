export type stateType = {
    profilePage: {
        posts:PostType[],
        newPostText:string
    },
    sidebar: {
        friends: FriendType[]
        menu: MenuType[]
    },
    messagesPage: {
        dialogs: DialogType[],
        messages: MessageType[],
        newPostMessage:string
    }


}
export type SidebarType={
    friends: FriendType[]
    menu: MenuType[]
}

export type FriendType={
    id:number
    name:string
    img:string
}

export type PostType={
    id:number
    name:string
    message:string
    like:number
}
export type MenuType = {
    path: string,
    point: string
}
export type DialogType={
    id:number
    name:string
    img:string
}
export type MessageType={
    id:number
    message:string
    isYou:boolean
}
