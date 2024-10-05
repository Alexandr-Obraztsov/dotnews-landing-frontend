import * as React from 'react';
import {Box, Typography} from "@mui/material";

type ItemProps = {
    content: React.ReactNode,
    title: string,
    description: string
}

export const Item : React.FC<ItemProps> = ({content, title, description}) => {
    return (
        <Box
            flexGrow={1}
            flexBasis={"300px"}
        >
            {content}
            <Typography
                marginTop={"14px"}
                variant={"h3"}
            >{title}</Typography>
            <Typography
                variant={"body1"}
                marginTop={"14px"}
            >
                {description}
            </Typography>
        </Box>
    );
};