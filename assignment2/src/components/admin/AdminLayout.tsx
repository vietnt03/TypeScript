import Header from "./Adminheader"
import Navbar from "./AdminNavbar"

import { Outlet } from "react-router-dom"
const Layout = () => {
    return <>
        <div className="flex flex-col h-screen">
        
            <Header />
            <div className="flex-1 flex flex-row">
               

            </div>
            <div className="flex-1 flex flex-row w=">
              
                <Navbar />
                <div>
                    <Outlet/>
                </div>

            </div>
        </div>

    </>
}

export default Layout