import { useCallback } from "react";
import useRequest from "../../hooks/useRequest";
import "./postList.scss"
import Post from "../post/post";

function Postlist() {
    const { loading, data } = useRequest("posts", []);

    return <table>
        <tr>
            <th>Title</th>
            <th>Description</th>
        </tr>


        {data?.map((post) =>
            <Post key={post.id}{...post} />
        )}


    </table>
}

export default Postlist;