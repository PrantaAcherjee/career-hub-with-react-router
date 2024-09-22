import { Outlet } from "react-router-dom";
import Footer from '../footer/Footer.jsx';

const Root =()=>{
    return(
        <div>
           <Outlet></Outlet>
           
           <Footer></Footer>
        </div>
    )
}
export default Root;