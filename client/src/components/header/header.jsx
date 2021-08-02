import React, { useState } from "react";
import { toggleMenuOpen } from "../../redux/menu/menu.actions";
import { connect } from "react-redux";
import { selectMenuOpen } from "../../redux/menu/menu.selector";
import { createStructuredSelector } from "reselect";
import "./hamburger.css"
import { Link } from "react-router-dom";

const Header = ({toggleMenuOpen, menuOpen}) => {

    const [changeText, setChangeText] = useState(false)

    return ( 
        <div className="mt-4 max-w-screen-lg mx-auto relative flex justify-between items-center text-white"> 
            <Link onMouseOver={() => setChangeText(true)} onMouseLeave={()=> setChangeText(false)} to="/" id="header-logo" {...(!menuOpen && {onClick: toggleMenuOpen})}  className="text-5xl tracking-wider inline-flex">
                <span>{"<"}</span>
                <p className={changeText ? 'hidden' : 'px-2'}>{'Kishore'} <span className="text-red-700">K</span>{'umar'}</p>
                <p className={changeText ? 'px-2' : 'hidden'} >Home</p>
                <span>{"/>"}</span>
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