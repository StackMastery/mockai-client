import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Auth from "@/components/Auth";

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Auth />
        </>
    );
}

export default Layout