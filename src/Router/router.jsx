import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../ErrorPage";
import Home from "../Components/Home";
import Register from "../Shared/Register";
import Login from "../Shared/Login";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        },
        {
          path:"/register",
          element:<Register></Register>
        },
        {
          path: "/login",
          element:<Login></Login>
        }
      ] }
  ]);
  export default router