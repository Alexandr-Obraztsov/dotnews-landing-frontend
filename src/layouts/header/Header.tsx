import * as React from 'react';
import {Button, Grid2, Select, styled, useMediaQuery} from "@mui/material";
import LanguageIcon from '@mui/icons-material/Language';
import {Sphere} from "../../components/sphere/Sphere";
import {Link} from "react-scroll";
import logo from "../../assets/svgs/logo.svg"

const buttons = [
    {
        name: "Главная",
        link: "main",
    },
    {
        name: "О проекте",
        link: "about",
    },
    {
        name: "Почему мы?",
        link: "solutions",
    },
]


export const Header: React.FC = () => {
    const matches = useMediaQuery('(min-width:980px)');

    return (
        <StyledHeader>
            <img src={logo} alt={"Logo"} width={"40px"}/>
            <Sphere size={"561px"} color={"rgba(50, 132, 207, 0.22)"} x={"90%"} y={"0"}/>
            <Sphere size={"468px"} color={"rgba(38, 164, 227, 0.22)"} x={"0%"} y={"0"}/>
            <Grid2
                container
                gap={matches ? 6 : 1}
                position={"relative"}
                wrap={"nowrap"}
            >
                {buttons.map((button) => (
                    <Link
                        to={button.link}
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        <StyledButton>
                            {button.name}
                        </StyledButton>
                    </Link>
                ))}
            </Grid2>

            <Grid2
                container
                gap={0.5}
                alignItems={"center"}
                wrap={"nowrap"}
            >

            </Grid2>
        </StyledHeader>
    );
};

const StyledHeader = styled("header")`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    margin-top: 30px;
    position: relative;
`

const StyledButton = styled(Button)`
    padding: 10px 12px;
    color: #808080;
    background-color: transparent;
    
    
    @media screen and (max-width: 600px) {
        display: none;
    }
`