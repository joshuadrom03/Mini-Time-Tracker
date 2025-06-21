import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { TimeEntries } from "./pages/TimeEntries";
import { AddEntries } from "./pages/AddEntries";

const Layout = () =>(
    <>
        <Navbar />
            <Outlet />
    </>
)

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/", element: <TimeEntries />
            },
            {
                path: "add", element: <AddEntries/>
            },
        ]

    }
])

const App = () => {
    return <RouterProvider router={router} />
}

export default App