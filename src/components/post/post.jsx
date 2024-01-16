import { Link } from "react-router-dom";
import "./post.scss"

function Post(props) {
    return <tr>
        <td>
            <Link to={`${props.id}?userId=${props.userId}`}>
                {props.title}
            </Link>
        </td>
        <td>{props.body}</td>


    </tr>
}

export default Post;