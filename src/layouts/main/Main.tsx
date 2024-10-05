import * as React from 'react';
import {Box, Button, Grid2, Typography, useMediaQuery} from "@mui/material";
import mainImage from "../../assets/images/main.png";
import iconSvg from "../../assets/svgs/icon.svg";
import {Link} from 'react-scroll';
import {configs} from "../../configs";

export const Main: React.FC = () => {
    const matches = useMediaQuery('(min-width:980px)');

    return (
        <Grid2
            container
            id={"main"}
            marginTop={"24px"}
            paddingY={"124px"}
            justifyContent={"center"}
            alignItems={"center"}
            minHeight={"700px"}
            gap={"54px"}
            direction={matches ? "row" : "column"}
        >
            <Grid2
                container
                direction={"column"}
                width={"max-content"}
                flexGrow={2}
                alignItems={matches ? "flex-start" : "center"}
                textAlign={matches ? "left" : "center"}
                sx={{
                    media: {

                    }
                }}
            >
                <img
                    src={iconSvg}
                    alt="Бот телеграмм"
                    style={{
                        width: "100px",
                        height: "100px",
                    }}
                />

                <Typography
                    variant={"h2"}
                    marginBlockStart={"32px"}
                >
                    .news <br/>
                    <span style={{fontWeight: 250, color: "#4E585C"}}>Новая эра новостей</span>
                </Typography>

                <Grid2
                    container
                    gap={"10px"}
                    wrap={"nowrap"}
                >
                    <Button
                        sx={{
                            marginTop: "32px",
                            flexGrow: 1,
                            padding: "10px 20px",
                            maxWidth: "300px",
                            whiteSpace: "nowrap",
                        }}
                        href={configs.telegram.bot_url}
                    >
                        Открыть бота
                    </Button>

                    <Link
                        to={"about"}
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        <Button
                            sx={{
                                marginTop: "32px",
                                color: "#4A626F",
                                backgroundColor: "#D8E4EA",
                            }}
                        >
                            Подробнее
                        </Button>
                    </Link>
                </Grid2>
            </Grid2>

            <Box
                sx={{
                    maxWidth: "600px",
                    width: "100%",
                    flexBasis: "400px",
                    flexGrow: 1,
                }}
            >
                <img
                    src={mainImage}
                    alt="Бот телеграмм"
                    style={{
                        width: "100%",
                        height: "100%",
                    }}
                />
            </Box>
        </Grid2>
    );
};
