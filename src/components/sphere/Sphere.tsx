import * as React from 'react';
import {Box} from "@mui/material";

type SphereProps = {
    color: string
    x: string
    y: string
    size: string
}

export const Sphere : React.FC<SphereProps> = ({color, x, y, size}) => {
    return (
        <Box
            bgcolor={"black"}
            borderRadius={"50%"}
            width={size}
            height={size}
            position={"absolute"}
            left={x}
            top={y}
            sx={{
                background: color,
                filter: "blur(100px)",
                transform: "Translate(-50%, -50%)"
            }}
        >

        </Box>
    );
};