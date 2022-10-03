import About from "../pages/About";
import Post from "../pages/Post";
import PostIdPage from "../pages/PostIdPage";
import Login from "../pages/Login";


export const privateRoutes = [
  {path: '/about', element: About},
  {path: '/posts', element: Post},
  {path: '/posts/:id', element: PostIdPage}
]
export const publicRoutes = [
  {path: '/login', element: Login}
]