import * as React from 'react';
import {Grid2, Typography} from "@mui/material";
import {Item} from "./item/Item";
import Lottie from "lottie-react";
import fingers_emoji from "../../assets/emojies/Pinched Fingers.json"
import fire_emoji from "../../assets/emojies/Fire.json"
import new_emoji from "../../assets/emojies/New.json"
import sparks_emoji from "../../assets/emojies/Sparks.json"
import reduce_svg from "../../assets/svgs/reduce.svg"
import eyes_emoji from "../../assets/emojies/Eyes.json"

const items = [
    {
        content: <Lottie animationData={fingers_emoji} loop={true} style={{background: "transparent", width: "50px"}}/>,
        title: "Персонализированный контент",
        description: "Мы учитываем ваши интересы и предпочтения, чтобы каждый раз предлагать именно те новости, которые вам интересны. Больше никаких лишних материалов — только то, что действительно важно."
    },
    {
        content: <Lottie animationData={fire_emoji} loop={true} style={{background: "transparent", width: "50px"}}/>,
        title: "Отборка качественных источников",
        description: "Мы тщательно выбираем источники информации, чтобы гарантировать, что вы получаете только достоверные и проверенные новости без кликбейта и фейков."
    },
    {
        content: <img src={reduce_svg} alt={"Сжатый формат"} width={"50px"}/>,
        title: "Сжатый формат",
        description: "Вместо длинных статей мы представляем сжатую информацию, которая выделяет главное. Получайте суть событий за считанные минуты, не тратя время на чтение лишнего."
    },
    {
        content: <Lottie animationData={eyes_emoji} loop={true} style={{background: "transparent", width: "50px"}}/>,
        title: "Удобство и доступность",
        description: "Доступ к новостям в любое время и в любом месте прямо из вашего Telegram. Не нужно искать информацию на разных сайтах — всё в одном месте."
    },
    {
        content: <Lottie animationData={new_emoji} loop={true} style={{background: "transparent", width: "50px"}}/>,
        title: "Регулярные обновления",
        description: "Мы следим за актуальными событиями и оперативно сообщаем вам о важных новостях, чтобы вы всегда были в курсе последних тенденций и изменений."
    },
    {
        content: <Lottie animationData={sparks_emoji} loop={true} style={{background: "transparent", width: "50px"}}/>,
        title: "Простота использования",
        description: "Интерфейс нашего бота интуитивно понятен и не требует дополнительных настроек. Просто запустите бота, и он начнет работать для вас, предоставляя новости в удобном формате без лишних усилий."
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
                columns={5}
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