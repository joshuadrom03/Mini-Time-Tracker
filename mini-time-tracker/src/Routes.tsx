import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { TimeEntries } from "./pages/TimeEntries";
import { AddEntries } from "./pages/AddEntries";
import { TaskProvider } from "./context/Context";

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

    return(
        <TaskProvider>
            <RouterProvider router={router} />
        </TaskProvider>
    )
}

export default App