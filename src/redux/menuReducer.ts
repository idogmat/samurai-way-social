import {FriendType, MenuType} from "../types/types";

type SidebarType={
    sidebar: {
        friends: FriendType[]
        menu: MenuType[]
    }
}

const initialState:SidebarType= {
    sidebar: {
        friends: [
            {
                id: 1,
                name: 'Jack',
                img: 'https://img.freepik.com/free-vector/friendship-day-square-frame-with-five-international-children_71593-925.jpg?w=826&t=st=1667805248~exp=1667805848~hmac=e4cfe4240d095466d0fa03c6fbe33555a8282bd3ad0f54cc61b41b43e664f2e9'
            },
            {
                id: 2,
                name: 'Sam',
                img: 'https://img.freepik.com/free-vector/sick-boy-with-thermometer-bed-child-with-high-temperature-cartoon-character-fever-influenza-symptom-kid-with-cold-patient-relaxing-blanket_71593-655.jpg?w=740&t=st=1667806992~exp=1667807592~hmac=4ed2ac6b00d98eaac785941a6a3f8a0edc09e2866a781fefd6d2cf1fdd9cfdef'
            },
            {
                id: 3,
                name: 'Cheed',
                img: 'https://img.freepik.com/free-vector/cat-elegant-tie_71593-692.jpg?w=740&t=st=1667807002~exp=1667807602~hmac=4fab6f9837a39cb7643abdf87eb08a5b32bd6736072171f37a91af1fddb4512a'
            }
        ],
        menu: [
            {path: '/profile', point: "Profile"},
            {path: '/messages', point: "Messages"},
            {path: '/news', point: "News"},
            {path: '/music', point: "Music"},
            {path: '/settings', point: "Settings"}
        ]
    }
}
const menuReducer=(state=initialState,action:null)=>{
            return state
}
export default menuReducer