export type AppTypes={
    state: {
        profilePage: Array<object>,
        sidebar: {
            friends:object[]
            menu:object[]
        }
        messagesPage: {
            dialogs:object[],
            messages:object[]
        }
    }}
export type DialogTypes={
    messages:{
        dialogs:object[],
        messages:object[]
    }
}
export type ProfileTypes={
    posts: Array<object>
}
export type FriendsTypes={
    sidebar: {
        friends:object[]
        menu:object[]
    }
}