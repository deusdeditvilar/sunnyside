import React from "react";

import Container from "../../components/Container/Container";
import Div from "../../components/Div/Div";
import Section from "../../components/Section/Section";
import Text from "../../components/Typography/Text";

import Emily from "../../assets/media/image-emily.jpg";
import Thomas from "../../assets/media/image-thomas.jpg";
import Jennie from "../../assets/media/image-jennie.jpg";

export default function Testimonial() {


    return (
        <Container>
            <Section secLarge>
                <h2 className="margin-top-bottom text-center testimonial-title">Client Testimonials</h2>

                <Section className="cards grid grid-gap">

                    <Div txtCenter padSides>
                        <img src={Emily} className="card-img" alt="A blonde girl with rocks on background" />
                        <Text className="margin-top-bottom-large">
                            We put our trust in Sunnyside and they delivered, making sure our
                            needs were met and deadlines were always hit.
                        </Text>
                        <h3>
                            Emily R
                        </h3>
                        <Text className="card-text">
                            Marketing Director
                        </Text>
                    </Div>

                    <Div txtCenter padSides>
                        <img src={Thomas} alt="A man looking a the camera smiling" className="card-img" />
                        <Text className="margin-top-bottom-large">
                            Sunnyside's enthusiasm coupled with their keen interest in
                            our brand's success made it a satisfying and ajoyable experience.
                        </Text>
                        <h3>
                            Thomas S.
                        </h3>
                        <Text className="card-text">
                            Chief Operator Officer
                        </Text>
                    </Div>

                    <Div txtCenter padSides>
                        <img src={Jennie} alt="A mid-aged woman looking at the camera smiling" className="card-img" />
                        <Text className="margin-top-bottom-large">
                            Incredible end result! Our sales increased over 400% when
                            we worked with Sunnyside. Highly recommended!
                        </Text>
                        <h3>
                            Jennie F.
                        </h3>
                        <Text className="card-text">
                            Business Owner
                        </Text>
                    </Div>

                </Section>
            </Section>
        </Container>
    )
}