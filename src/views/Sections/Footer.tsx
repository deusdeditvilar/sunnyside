import React from "react";
import Div from "../../components/Div/Div";
import Section from "../../components/Section/Section";
import Link from "../../components/Typography/Link";

import LogoBottom from "../../assets/media/logo-bottom.svg";
import { ReactComponent as Facebook } from "../../assets/media/icon-facebook.svg";
import { ReactComponent as Instagram } from "../../assets/media/icon-instagram.svg";
import { ReactComponent as Twitter } from "../../assets/media/icon-twitter.svg";
import { ReactComponent as Pinterest } from "../../assets/media/icon-pinterest.svg";
import List from "../../components/List/List";


export default function Footer() {

    const linkList = {
        items: [
            {
                item: (<Link href="#" >About</Link>),
            },
            {
                item: (<Link href="#" >Services</Link>),
            },
            {
                item: (<Link href="#" >Projects</Link>),
            },
        ]
    }

    const socialList = {
        items: [
            {
                item: (<Link href="#"><Facebook /></Link>),
            },
            {
                item: (<Link href="#"><Instagram /></Link>),
            },
            {
                item: (<Link href="#"><Twitter /></Link>),
            },
            {
                item: (<Link href="#"><Pinterest /></Link>),
            },
        ]
    }

    return (
        <Section id="footer">
            <Div txtCenter>
                <img src={LogoBottom} alt="" width={150} />

                <List className="flex flex-justify-center bottom-opt margin-top-bottom" listItem={linkList}/>

                <List className="flex flex-justify-center bottom-social" listItem={socialList}/>

            </Div>
        </Section>
    )
}