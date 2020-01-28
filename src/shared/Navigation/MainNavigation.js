import React, {useState} from "react";
import {Link} from "react-router-dom";

import "./MainNavigation.css";
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import BackDrop from "../UIElements/BackDrop";

const MainNavigation = (props) => {
    const [drawerIsOpen, serDrawerIsOpen] = useState(false);

    const openDrawer = () => {
        serDrawerIsOpen(true);
    };

    const closeDrawer = () => {
        serDrawerIsOpen(false);
    };

    return (
        <React.Fragment>
            {drawerIsOpen && <BackDrop onClick={closeDrawer}/>}
            {drawerIsOpen ? <SideDrawer>
                <nav className="main-navigation__drawer-nav">
                    <NavLinks/>
                </nav>
            </SideDrawer> : null}
            <MainHeader>
                <button className="main-navigation__menu-btn" onClick={openDrawer}>
                    <span/>
                    <span/>
                    <span/>
                </button>
                <h1 className="main-navigation__title">
                    <Link to="/">Your places</Link>
                </h1>
                <nav className="main-navigation__header-nav">
                    <NavLinks/>
                </nav>
            </MainHeader>
        </React.Fragment>
    );
};

export default MainNavigation;