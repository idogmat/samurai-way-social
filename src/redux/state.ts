import {stateType} from "../types/types";

const state: stateType = {
    profilePage: [{id: 1,name: 'Yorik', message: 'Hi lolz ', like: 5},
        {id: 2,name: 'Yorik', message: 'Hi lolz ', like: 5},
        {id: 3,name: 'Yorik', message: 'Hi lolz ', like: 5},
        {id: 4,name: 'Yorik', message: 'Hi lolz ', like: 5},
        {id: 5,name: 'Yorik', message: 'Hi lolz ', like: 5},
        {id: 6,name: 'Yorik', message: 'Hi lolz ', like: 5},
        {id: 7,name: 'Yorik', message: 'Hi lolz ', like: 5}],
    messagesPage: {
        dialogs: [{id: 1, name: 'Jack',img:'https://cdn.vox-cdn.com/thumbor/0wYP_9aoSn3BXoiJMDtc9VT7YmQ=/0x0:2000x1270/920x613/filters:focal(840x475:1160x795):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69829481/Rick_And_Morty_Season_5_Episode_10_copy.0.jpg'},
            {id: 2, name: 'Sam',img:'https://cdn.vox-cdn.com/thumbor/0wYP_9aoSn3BXoiJMDtc9VT7YmQ=/0x0:2000x1270/920x613/filters:focal(840x475:1160x795):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69829481/Rick_And_Morty_Season_5_Episode_10_copy.0.jpg'},
            {id: 3, name: 'Cheed',img:'https://cdn.vox-cdn.com/thumbor/0wYP_9aoSn3BXoiJMDtc9VT7YmQ=/0x0:2000x1270/920x613/filters:focal(840x475:1160x795):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69829481/Rick_And_Morty_Season_5_Episode_10_copy.0.jpg'},
            {id: 4, name: 'Yorik',img:'https://cdn.vox-cdn.com/thumbor/0wYP_9aoSn3BXoiJMDtc9VT7YmQ=/0x0:2000x1270/920x613/filters:focal(840x475:1160x795):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69829481/Rick_And_Morty_Season_5_Episode_10_copy.0.jpg'},
            {id: 5, name: 'Marri',img:'https://cdn.vox-cdn.com/thumbor/0wYP_9aoSn3BXoiJMDtc9VT7YmQ=/0x0:2000x1270/920x613/filters:focal(840x475:1160x795):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69829481/Rick_And_Morty_Season_5_Episode_10_copy.0.jpg'},
            {id: 6, name: 'Alla',img:'https://cdn.vox-cdn.com/thumbor/0wYP_9aoSn3BXoiJMDtc9VT7YmQ=/0x0:2000x1270/920x613/filters:focal(840x475:1160x795):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69829481/Rick_And_Morty_Season_5_Episode_10_copy.0.jpg'},
            {id: 7, name: 'Julce',img:'https://cdn.vox-cdn.com/thumbor/0wYP_9aoSn3BXoiJMDtc9VT7YmQ=/0x0:2000x1270/920x613/filters:focal(840x475:1160x795):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69829481/Rick_And_Morty_Season_5_Episode_10_copy.0.jpg'}],
        messages: [{id: 1, message: 'Hi lolz '},
            {id: 2, message: 'Hi lolz ',type:true},
            {id: 3, message: 'Hi lolz ',type:false},
            {id: 4, message: 'Hi lolz ',type:true},
            {id: 5, message: 'Hi lolz ',type:false},
            {id: 6, message: 'Hi lolz ',type:true},
            {id: 7, message: 'Hi lolz ',type:false}]
    },
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
export default state