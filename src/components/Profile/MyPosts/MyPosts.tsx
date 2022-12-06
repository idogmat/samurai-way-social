import React, {FC} from 'react';
import s from "./MyPosts.module.scss";
import {PostType} from "../../../types/types";
import Post from "./Post/Post";
import {Field, InjectedFormProps, reduxForm, reset} from "redux-form";
import {maxLengthC, required} from "../../../utils/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {useDispatch} from "react-redux";
type SubmitType={
    newPostBody:string
}
export type MyPostsPropsType={
    posts: PostType[],
    addPost:(m:string)=>void
}

const MyPosts:FC<MyPostsPropsType> = ({posts,
                                          addPost
                                          }) => {
    const dispatch =useDispatch()
    const mapForPosts = posts.map((e: PostType, index: number) => {
        return <Post key={index} id={e.id} message={e.message} name={e.name} like={e.like}/>
    })
    const addNewMessage=(e:SubmitType)=>{
        addPost(e.newPostBody)
        dispatch(reset('profileAddMessageForm'))
    }
    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <div>
                <AddPostFormRedux onSubmit={addNewMessage}/>
            </div>
            <div className={s.postsList}>
                {mapForPosts}


            </div>
        </div>
    );
};
const validateLength = maxLengthC(100)

export default MyPosts;


const AddPostForm:React.FC<InjectedFormProps<SubmitType>> =(props)=>{

    return  <form onSubmit={props.handleSubmit} className={s.sendMessageForm}>
        <Field component={Textarea}
               placeholder={'PostMessage'}
               validate={[required,validateLength]}
               name={'newPostBody'}
        />

        <button className={s.sendBtn}>Add post</button>
    </form>
}
const AddPostFormRedux = reduxForm<SubmitType>({form:'profileAddMessageForm'})(AddPostForm)