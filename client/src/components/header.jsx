import React from "react";
import { toggleMenuOpen } from "../redux/menu/menu.actions";
import { connect } from "react-redux";
import { selectMenuOpen } from "../redux/menu/menu.selector";
import { createStructuredSelector } from "reselect";
import "./hamburger.css"
import { Link } from "react-router-dom";

const Header = ({toggleMenuOpen, menuOpen}) => {
    return ( 
        <div className="header mt-4 max-w-screen-lg mx-auto relative flex justify-between items-center text-white"> 
            <Link to="/" id="header-logo" className="text-5xl tracking-wider">
                {'< Kishore'} <span className="text-red-700">K</span>{'umar />'}
            </Link>
            <button onClick={toggleMenuOpen} className={`hamburger relative z-20 hamburger--emphatic ${menuOpen ? '' : "is-active"}`} type="button">
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>
            </button>
        </div>
     );
}

const mapStateToProps = createStructuredSelector({
    menuOpen: selectMenuOpen
})

const mapDispatchToState = dispatch => ({
    toggleMenuOpen: () => dispatch(toggleMenuOpen())
})
 
export default connect(mapStateToProps, mapDispatchToState)(Header);