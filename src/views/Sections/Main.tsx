import React from "react";
import Div from "../../components/Div/Div";
import Section from "../../components/Section/Section";

import { ReactComponent as Arrow } from "../../assets/media/icon-arrow-down.svg";

export default class Main extends React.Component {

    componentDidMount() {
        setInterval(function () {
            const show = document.querySelector('span[data-show]');
            const next = show?.nextElementSibling || document.querySelector('span:first-child');
            const up = document.querySelector('span[data-up]');

            if (up) {
                up.removeAttribute('data-up')
            }

            show?.removeAttribute('data-show')
            show?.setAttribute('data-up', '')

            next?.setAttribute('data-show', '')


        }, 2000)
    }

    render() {
        return (
            <Div className="main">
                <Section secLarge htFull>
                    <Div txtCenter htFull>

                        <h1 className="hero-title padding-top-bottom-large flex flex-justify-center flex-wrap margin-auto">
                            WE ARE

                            <Div className="mask">
                                <span data-show>CREATIVE</span>
                                <span>ORIGINAL</span>
                                <span>INOVATIVE</span>
                                <span>FOR YOU</span>
                            </Div>

                        </h1>

                        <Div paddingTB >
                            <Arrow id="arrowdown" />
                        </Div>
                    </Div>
                </Section>
            </Div>
        )
    }
}