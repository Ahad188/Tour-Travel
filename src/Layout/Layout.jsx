import { Outlet } from "react-router-dom";
import Navbar from "../Components/page/Share/Navbar/Navbar";
import Footer from "../Components/page/Share/Footer/Footer";


const Layout = () => {
     return (
          <div>
               <Navbar/>
               <Outlet/>
               <Footer/>
          </div>
     );
};

export default Layout;