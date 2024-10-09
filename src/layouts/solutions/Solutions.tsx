import * as React from 'react';
import {Grid2, Typography} from "@mui/material";
import {Item} from "./item/Item";
import Lottie from "lottie-react";
import fingers_emoji from "../../assets/emojies/Pinched Fingers.json"
import fire_emoji from "../../assets/emojies/Fire.json"
import sparks_emoji from "../../assets/emojies/Sparks.json"

const items = [
    {
        content: <Lottie animationData={fingers_emoji} loop={true} style={{background: "transparent", width: "50px"}}/>,
        title: "Персонализированный контент",
        description: "Мы учитываем ваши интересы и предпочтения, чтобы каждый раз предлагать именно те новости, которые вам интересны. Больше никаких лишних материалов — только то, что действительно важно."
    },
    {
        content: <Lottie animationData={sparks_emoji} loop={true} style={{background: "transparent", width: "50px"}}/>,
        title: "Простота использования",
        description: "Интерфейс нашего бота интуитивно понятен и не требует дополнительных настроек. Просто запустите бота, и он начнет работать для вас, предоставляя новости в удобном формате без лишних усилий."
    },
    {
        content: <Lottie animationData={fire_emoji} loop={true} style={{background: "transparent", width: "50px"}}/>,
        title: "Сжатый формат\n",
        description: "Вместо длинных статей мы представляем сжатую информацию, которая выделяет главное. Получайте суть событий за считанные минуты, не тратя время на чтение лишнего."
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
                Три причины пользоваться <Typography fontWeight={"bold"} fontSize={"50px"} color={"primary"} display={"inline"}>.news</Typography>
            </Typography>

            <Grid2
                container
                columns={2}
                marginTop={"48px"}
                spacing={6}
            >

                {items.map((item, index) => (
                    <Item content={item.content} title={item.title} description={item.description}/>
                ))}
            </Grid2>
        </Grid2>
    );
};