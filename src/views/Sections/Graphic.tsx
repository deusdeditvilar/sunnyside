import React from "react";
import Div from "../../components/Div/Div";
import Divider from "../../components/Divider/Divider";
import First from "../../components/Divider/First";
import Picture from "../../components/Media/Picture";
import Second from "../../components/Divider/Second";
import Text from "../../components/Typography/Text";

import graphicDesk from "../../assets/media/desktop/image-graphic-design.jpg";
import graphicMob from "../../assets/media/mobile/image-graphic-design.jpg";
import photoDesk from "../../assets/media/desktop/image-photography.jpg";
import photoMob from "../../assets/media/mobile/image-photography.jpg";

export default function Graphic() {

    return (
        <Div>
            <Divider column>
                    <First className="position-relative">
                        <Picture desktop={graphicDesk} mobile={graphicMob} />

                        <h2 id="graphic-title">Graphic Design</h2>
                        <Text className="margin-auto" id="graphic-desc">
                            Great design makes you memorable. We deliver artwork
                            that underscores your brand message and captures potential
                            clients' attention
                        </Text>
                    </First>

                    <Second className="position-relative">
                        <Picture desktop={photoDesk} mobile={photoMob} />
                        <h2 id="photo-title">Photography</h2>
                        <Text className="margin-auto" id="photo-desc">
                            Increase your credibility by getting the most stunning
                            high-quality photos that improve your business image.
                        </Text>
                    </Second>
            </Divider>
        </Div>
    )
}