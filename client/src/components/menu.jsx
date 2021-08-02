import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { selectMenuOpen } from "../redux/menu/menu.selector";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleMenuOpen } from "../redux/menu/menu.actions";
import "./animation.css"

const Menu = ({location, menuOpen, toggleMenuOpen}) => {

    return ( 
        <div id="nav" className={`${menuOpen ? "hidden fadeOut" : 'fadeIn'} bg-black animated faster max-w-screen-lg mx-auto w-screen h-screen z-10 relative`}>
            <div className="my-auto h-5/6 uppercase grid items-center">
                <Link onClick={toggleMenuOpen} to="/portfolio" className={`${location.pathname === '/portfolio' ? 'text-red-700' : " text-white"} text-5xl md:text-7xl hover:text-red-700 transition ease-linear delay-100`}>Portfolio</Link>
                <Link onClick={toggleMenuOpen} to="/about" className={`${location.pathname === '/about' ? 'text-red-700' : " text-white"} hover:text-red-700 transition ease-linear delay-100  text-5xl md:text-7xl`}>About</Link>
                <Link onClick={toggleMenuOpen} to="/contactme" className={`${location.pathname === '/contactme' ? 'text-red-700' : " text-white"} hover:text-red-700 transition ease-linear delay-100  text-5xl md:text-7xl`}>Contact Me</Link>
            </div>
        </div>
     );
}

const mapStateToProps = createStructuredSelector({
    menuOpen: selectMenuOpen
})

const mapDispatchToState = dispatch => ({
    toggleMenuOpen: () => dispatch(toggleMenuOpen())
})
 
export default connect(mapStateToProps, mapDispatchToState)(withRouter(Menu));