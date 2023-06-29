import { Outlet } from "react-router-dom";
import BottomInfo from "../custom-element/bottomInfo";
import NavBar from "../custom-element/nav-bar";

export default function AppLayout() {
    return (
        <>
        <NavBar />
        <Outlet />
        <BottomInfo />
        </>
    )
}