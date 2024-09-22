import { Outlet } from "react-router-dom";
import Footer from '../footer/Footer.jsx';
import { Header } from "../header/Header.jsx";

const Root =()=>{
    return(
        <div>
            <Header></Header>
            
           <Outlet></Outlet>
           
           <Footer></Footer>
        </div>
    )
}
export default Root;