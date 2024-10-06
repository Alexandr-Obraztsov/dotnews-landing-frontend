import * as React from 'react';
import {Grid2, Typography} from "@mui/material";

type ItemProps = {
    content: React.ReactNode,
    title: string,
    description: string
}

export const Item : React.FC<ItemProps> = ({content, title, description}) => {
    return (
        <Grid2
            size={1}
            flexBasis={"300px"}
            flexGrow={1}
            flexShrink={1}
        >
            {content}
            <Typography
                marginTop={"14px"}
                variant={"h3"}
            >
                {title}
            </Typography>

            <Typography
                variant={"body1"}
                marginTop={"14px"}
            >
                {description}
            </Typography>
        </Grid2>
    );
};