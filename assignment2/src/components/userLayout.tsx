import { Outlet } from "react-router-dom"

import Header from "./header"
import Slider from "./slider"
import Footer from "./footer"

const UserLayout = () => {
    return <>
        <Header/>
        <Slider/>
        <Outlet/>
        <Footer/>
    </>
}

export default UserLayout