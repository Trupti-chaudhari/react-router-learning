import { Outlet } from "react-router-dom";
import Footer from "../footerSection/footer";
import Header from "../headerSection/header";
import Postheader from "../postHeader/postHeader";

function Rootlayout(){
    return <>
    <Header/>
    <Postheader/>
    <Outlet/>
    <Footer/>
    
    </>
}
export default Rootlayout;