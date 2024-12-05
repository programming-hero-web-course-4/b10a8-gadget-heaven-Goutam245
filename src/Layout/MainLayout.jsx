import { Outlet } from "react-router-dom";
import Fotter from "../Components/Fotter";
import Nabvar from "../Components/Nabvar";
import { Toaster } from 'react-hot-toast';
const MainLayout = () => {
    return (
        <div>
            <Toaster></Toaster>
            <Nabvar></Nabvar>
            <div className="min-h-[calc(100vh-293px)]">
               <Outlet></Outlet>
            </div>
            <Fotter></Fotter>
        </div>
    );
};

export default MainLayout;