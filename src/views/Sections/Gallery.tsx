import React from "react";

import Container from "../../components/Container/Container";


import MilkBottle from "../../assets/media/desktop/image-gallery-milkbottles.jpg";
import Orange from "../../assets/media/desktop/image-gallery-orange.jpg";
import Cone from "../../assets/media/desktop/image-gallery-cone.jpg";
import SugarCubes from "../../assets/media/desktop/image-gallery-sugarcubes.jpg";
import List from "../../components/List/List";



export default function Gallery() {

    const data = {
        items: [
            {item: (<img src={MilkBottle} alt="" />)},
            {item: (<img src={Orange} alt="" />)},
            {item: (<img src={Cone} alt="" />)},
            {item: (<img src={SugarCubes} alt="" />)},
        ]
    }

    return (
        <Container ctLarge className="padding-remove">
            <List className="grid images" listItem={data}></List>
        </Container>
    )
}