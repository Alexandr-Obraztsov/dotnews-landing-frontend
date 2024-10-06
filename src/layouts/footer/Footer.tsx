import * as React from 'react';
import {Button, Grid2, Typography} from "@mui/material";
import {Sphere} from "../../components/sphere/Sphere";
import {configs} from "../../configs";

export const Footer = () => {
    return (
        <>
            <Grid2
                container
                marginTop={"104px"}
                marginBlockEnd={"20px"}
                justifyContent={"space-between"}
                alignItems={"center"}
                position={"relative"}

            >

                <Grid2
                    container
                    direction={"column"}
                    width={"50%"}
                >

                    <Typography
                        variant={"body1"}
                        fontWeight={"600"}
                        fontSize={"24px"}
                    >
                        .news
                    </Typography>

                    <Typography variant={"body1"}>
                        Экономьте время и оставайтесь в курсе всех событий.
                    </Typography>
                </Grid2>

                <Button
                    href={configs.telegram.bot_url}
                    sx={{
                        flexGrow: 0,
                        padding: "10px 24px",
                        color: "#229cd7",
                        backgroundColor: "transparent",
                    }}
                >
                    Открыть бота
                    <Sphere size={"268px"} color={"rgba(50, 132, 207, 0.22)"} x={"50%"} y={"50%"}/>

                </Button>
                <Sphere size={"468px"} color={"rgba(107,175,236,0.22)"} x={"0"} y={"0"}/>
            </Grid2>
        </>
    );
};