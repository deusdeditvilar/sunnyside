import React from "react";
import Divider from "../../components/Divider/Divider";
import First from "../../components/Divider/First";

import Section from "../../components/Section/Section";
import Div from "../../components/Div/Div";
import Second from "../../components/Divider/Second";
import Picture from "../../components/Media/Picture";

import Eggdesk from "../../assets/media/desktop/image-transform.jpg";
import Cupdesk from "../../assets/media/desktop/image-stand-out.jpg";
import Eggmob from "../../assets/media/mobile/image-transform.jpg";
import Cupmob from "../../assets/media/mobile/image-stand-out.jpg";
import Text from "../../components/Typography/Text";
import Link from "../../components/Typography/Link";

export default function About() {

    return (

        <Div>

            <Divider reverse>

                    <First>

                        <Section secLarge>
                            <Div flexCol flexJC flexACm marginAuto widthSm htFull txtCenterm padSides>

                                    <h1 className="about-title">Transform your brand</h1>
                                    <Text className="about-desc margin-auto margin-top-bottom">
                                        We are a full-service creative agency specializing in helping
                                        brands grow fast. Engage your clients through compelling visuals
                                        that do most of the marketing for you.
                                    </Text>
                                    <Link href="#" className="learn-more width-fit-content" id="learn-yellow">LEARN MORE</Link>
                            </Div>
                        </Section>

                    </First>

                    <Second>
                        <Picture desktop={Eggdesk} mobile={Eggmob} />
                    </Second>
            </Divider>


            <Divider column>

                    <First>
                        <Picture desktop={Cupdesk} mobile={Cupmob} />
                    </First>

                    <Second>
                        <Section secLarge htFull>
                            <Div flex flexCol flexJC flexACm marginAuto widthSm htFull txtCenterm padSides>

                                <h1 className="about-title">Stand out to the right audience</h1>

                                <Text className="about-desc margin-auto margin-top-bottom">
                                    We are a full-service creative agency specializing in helping
                                    brands grow fast. Engage your clients through compelling visuals
                                    that do most of the marketing for you.
                                </Text>

                                <Link href="#" className="learn-more width-fit-content" id="learn-red">LEARN MORE</Link>
                            </Div>
                        </Section>
                    </Second>
            </Divider>

        </Div>

    )
}