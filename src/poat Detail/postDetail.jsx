import { useParams } from "react-router-dom"
import "./postDetail.scss"
import useRequest from "../hooks/useRequest";
import Post from "../components/post/post";

function PostDetail(){
    const {postId} = useParams();
    const {loading,data} = useRequest(`posts/${postId}`)

    if (loading){
        return <div>Loading...</div>
    }

    return <>
    <div>
        <Post {...data}/>
    </div>
    
    </>
}

export default PostDetail;