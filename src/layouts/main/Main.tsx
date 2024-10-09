import * as React from 'react';
import {Box, Button, Grid2, Typography, useMediaQuery} from "@mui/material";
import iconSvg from "../../assets/svgs/icon.svg";
import {Link} from 'react-scroll';
import {configs} from "../../configs";
import iphone from "../../assets/images/iphone.png"

export const Main: React.FC = () => {
    const matches = useMediaQuery('(min-width:980px)');
    const matches2 = useMediaQuery('(min-width:600px)');

    const handlerClick = () => {
        fetch(`${configs.api_url}/metrics/signal`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userTelegramId: 0,
                action: "LandingGoToBotClicked",
            }),
        })
        window.open(configs.telegram.bot_url, "_blank");
    }

    return (
        <Grid2
            container
            id={"main"}
            marginTop={"124px"}
            justifyContent={"space-around"}
            alignItems={"center"}
            gap={"54px"}
            direction={matches ? "row" : "column"}
        >
            <Grid2
                container
                direction={"column"}
                alignItems={matches ? "flex-start" : "center"}
                textAlign={matches ? "left" : "center"}
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
                    fontSize={matches2 ? "50px" : "36px"}
                >
                    .news (beta)
                    <br/>
                    <span style={{fontWeight: 250, color: "#4E585C"}}>
                        Новая эра новостей.
                    </span>
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
                        onClick={handlerClick}
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
                    flexGrow: 0,
                }}
            >
                <img
                    src={iphone}
                    alt="Бот телеграмм"
                    onClick={handlerClick}
                    style={{
                        cursor: "pointer",
                        maxHeight: "600px",
                        objectFit: "contain",
                        width: "100%",
                }}
                />
            </Box>
        </Grid2>
    );
};
