import * as React from 'react';
import {Grid2, Typography} from "@mui/material";

export const About = () => {
    return (
        <Grid2
            container
            direction={"column"}
            id={"about"}
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
        </Grid2>
    );
};