import {PostType} from "../../../types/types";
import {addPost, ProfilePageType, updateNewPostText} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";




let mapStateToProps = (state: AppStateType): ProfilePageType => {
    return state.profileReducer
}
// let mapDispatchToProps = (dispatch: (action: any) => void) => {
//     return {
//         addPost: () => {
//             dispatch(addPostActionCreator())
//         },
//         onPostChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//             dispatch(updateNewPostTextActionCreator(e.currentTarget.value))
//         }
//     }
// }

const MyPostsContainer = connect(mapStateToProps, {updateNewPostText,addPost})(MyPosts);
export default MyPostsContainer