import * as React from 'react';
import {Grid2, Typography} from "@mui/material";
import eyes from "../../assets/images/eyes.png";
import {Item} from "./item/Item";

const items = [
    {
        content: <img src={eyes} alt={"eyes"} width={"50px"}/>,
        title: "Пример",
        description: "Пример описания"
    },
    {
        content: <img src={eyes} alt={"eyes"} width={"50px"}/>,
        title: "Пример",
        description: "Пример описания"
    },
    {
        content: <img src={eyes} alt={"eyes"} width={"50px"}/>,
        title: "Пример",
        description: "Пример описания"
    },
    {
        content: <img src={eyes} alt={"eyes"} width={"50px"}/>,
        title: "Пример",
        description: "Пример описания"
    },
    {
        content: <img src={eyes} alt={"eyes"} width={"50px"}/>,
        title: "Пример",
        description: "Пример описания"
    },
    {
        content: <img src={eyes} alt={"eyes"} width={"50px"}/>,
        title: "Пример",
        description: "Пример описания"
    },
    {
        content: <img src={eyes} alt={"eyes"} width={"50px"}/>,
        title: "Пример",
        description: "Пример описания"
    },
    {
        content: <img src={eyes} alt={"eyes"} width={"50px"}/>,
        title: "Пример",
        description: "Пример описания"
    },
    {
        content: <img src={eyes} alt={"eyes"}  width={"50px"}/>,
        title: "Пример",
        description: "Пример описания"
    },

]

export const Solutions: React.FC = () => {
    return (
        <Grid2
            id={"solutions"}
            marginTop={"110px"}
            container
            direction={"column"}
        >
            <Typography variant={"h2"}>
                Девять причин пользоваться News
            </Typography>

            <Grid2
                container
                columns={3}
                marginTop={"48px"}
                rowGap={"32px"}
            >

                {items.map((item, index) => (
                    <Item content={item.content} title={item.title} description={item.description}/>
                ))}
            </Grid2>
        </Grid2>
    );
};