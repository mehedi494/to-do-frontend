import {
  createBrowserRouter,
  
} from "react-router-dom";
import  { rootLoader } from "./routes/root";
import App from "../App";
import Contacts from "../pages/Contacts";

const Routes = () => createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: rootLoader,
    
  },
  {
    path: "/contact",
    element: <Contacts />,
    loader: rootLoader,
    
  },
])

export default Routes;