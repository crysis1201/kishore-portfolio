import React from "react";
import Header from "../components/header";
import IntroCard from "../components/introcard";
import photo from "../components/photo.jpg"
import { withRouter } from "react-router-dom"

class homepage extends React.Component {
    render() {
    return ( 
        <div className="h-screen py-4" style={{backgroundImage: `url(${photo})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
            <Header />
            <IntroCard />
            <p className="text-white"> HI {this.props.location.pathname} </p>
        </div>
     );
    }
}
export default withRouter(homepage);