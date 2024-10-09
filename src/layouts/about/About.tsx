import * as React from 'react';
import {Grid2, Typography} from "@mui/material";

export const About = () => {
    return (
        <Grid2
            container
            direction={"column"}
            id={"about"}
            marginTop={"120px"}
        >
            <Typography
                variant={"h2"}
            >
                О нашем проекте
            </Typography>

            <Typography
                variant={"body1"}
                marginTop={"14px"}
            >
                Быстро получайте актуальные и достоверные новости без кликбейта и информационного шума. <Typography fontWeight={"bold"} color={"primary"} display={"inline"}>dotnews</Typography> - это телеграм-бот, который предоставляет сжатую и персонализированную информацию из различных источников, позволяя вам экономить время и оставаться в курсе событий в любое время и в любом месте.
            </Typography>
        </Grid2>
    );
};