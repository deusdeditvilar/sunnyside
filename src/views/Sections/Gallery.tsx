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
            {item: (<img src={MilkBottle} alt="Bottles of milk with a fake sky made with cotton clouds in the background" />)},
            {item: (<img src={Orange} alt="A plate with an orange on the center and an orange background" />)},
            {item: (<img src={Cone} alt="An ice cream cone with a blue background" />)},
            {item: (<img src={SugarCubes} alt="Sugar cubes mounted on top of eachother on a red background" />)},
        ]
    }

    return (
        <Container ctLarge className="padding-remove">
            <List className="grid images" listItem={data}></List>
        </Container>
    )
}