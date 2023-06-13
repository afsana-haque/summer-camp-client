import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AllInstructors from "../pages/Instructors/AllInstructors";
import AllClasses from "../pages/AllClasses/AllClasses";
import Dashboard from "../Layout/Dashboard";
import MySelect from "../pages/Dashboard/MySelect/MySelect";
import AddAClass from "../pages/Dashboard/instructors/AddAClass";
import PrivateRoute from "../providers/PrivateRoute";
import ManageClasses from "../pages/AdminPages/ManageClasses/ManageClasses";

export const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage></ErrorPage>,
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'allClasses',
                element: <AllClasses></AllClasses>
            },
            {
                path: "allInstructors",
                element:<AllInstructors></AllInstructors>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'mySelect',
                element: <MySelect></MySelect>
            },
            {
                path: 'addAClass',
                element: <AddAClass></AddAClass>
            },
            {
                path:'manageClasses',
                element: <ManageClasses></ManageClasses>
            },
        ]
    }
]);