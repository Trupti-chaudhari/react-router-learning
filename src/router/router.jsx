import { createBrowserRouter } from "react-router-dom";
import request from "../util/request";
import Rootlayout from "../components/rootLayout/rootLayout";
import Homepage from "../pages/homePage/homePage";
import PostDetail from "../poat Detail/postDetail";




const router = createBrowserRouter([
    {
        path: "/",
        element: <Rootlayout/>,
        children: [
            {
                path: "/",
                element: <Homepage/>
            },
            {
                path : ":postId",
                element: <PostDetail/>
            }
        ]
    }
]
)

export default router;