import React, { useState, useEffect } from "react";
import Div from "../../components/Div/Div";
import { ReactComponent as Logo } from "../../assets/media/logo.svg";
import Link from "../../components/Typography/Link";
import List from "../../components/List/List";

function Header() {

    const [scroll, setScroll] = useState('');

    useEffect(() => {
        window.onscroll = function () {
            var top = window.pageYOffset || document.documentElement.scrollTop;
            if (top > 10) {
                setScroll(' scrolled')
            } else {
                setScroll('');
            }
        };

        let menu = document.querySelector('.nav-links');
        let hamburger = document.getElementById('hamburger');
        let offset = document.querySelector('.offset');
        let body = document.querySelector('body');

        hamburger?.addEventListener('click', event => {
            menu?.classList.toggle('open');
            offset?.classList.toggle('open');
            body?.classList.toggle('disable')
        });
    });

    const dataList = {
        items: [
            {
                item: (<Link href="#" >About</Link>),
                className: "margin-top@m"
            },
            {
                item: (<Link href="#" >Services</Link>),
                className: "margin-top@m"
            },
            {
                item: (<Link href="#" >Projects</Link>),
                className: "margin-top@m"
            },
            {
                item: (<Link href="#" className="contact margin-auto">Contact</Link>),
                className: "margin-top@m"
            },
        ]
    }

    return (
        <Div className={"offset" + scroll}>
            <nav className="container sunny-nav flex flex-align-center flex-between margin-top-bottom margin-auto">
                <Div>
                    <Logo />
                </Div>

                <Div id="hamburger">
                    <Div></Div>
                    <Div></Div>
                    <Div></Div>
                </Div>

                <List className="nav-links flex" listItem={dataList} />

            </nav>
        </Div>
    )

}

export default Header