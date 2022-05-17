import React from "react";

import '../assets/css/sunny-config.css';
import '../assets/css/sunny.css'
import Div from "../components/Div/Div";
import Menu from "./Sections/Menu";
import Main from "./Sections/Main";
import About from "./Sections/About";
import Testimonial from "./Sections/Testimonial";
import Gallery from "./Sections/Gallery";
import Graphic from "./Sections/Graphic";
import Footer from "./Sections/Footer";

class Home extends React.Component {

    render() {

        return (
            <Div>
                <Menu></Menu>
                <Main></Main>
                <About></About>
                <Graphic></Graphic>
                <Testimonial></Testimonial>
                <Gallery></Gallery>
                <Footer></Footer>
            </Div>
        )
    }
}

export default Home;