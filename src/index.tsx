import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

export const theme = createTheme({
    palette: {
        mode: "light",

        background: {
            default: "#f2f2f2",
            paper: "#f2f2f2",
        },

        text: {
            primary: "#202628",
            secondary: "#4e585c",
        },

    },

    typography: {
        fontFamily: "Rubik, sans-serif",
        h2: {
            color: "#202600",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "50px",
            lineHeight: "59px",
            letterSpacing: "-0.03em",
        },

        h3: {
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "32px",
            letterSpacing: "-0.03em",
        },
        body1: {
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "17px",
            lineHeight: "130%",
            color: "#4E585C",
        }
    },

    components: {

        MuiButton: {
            styleOverrides: {
                root: {
                    flexGrow: 1,
                    lineHeight: "1rem",
                    borderRadius: "50px",
                    padding: "12px 16px",
                    backgroundColor: "#229dd8",
                    color: "#fdfdfd",
                    fontSize: "17px",
                    textTransform: "capitalize",
                    boxShadow: "none",
                    fontWeight: "medium",

                    "&:hover":
                        {
                            boxShadow: "none",
                        }
                }
                ,

                colorPrimary: {
                    backgroundColor: "#229dd8",
                    color: "#fdfdfd",
                }
                ,

                colorSecondary: {
                    backgroundColor: "#d7e3e9",
                    color: "#5d7481",
                }
            }
        }
        ,

        MuiDivider: {
            styleOverrides: {
                root: {
                    backgroundColor: "#2e353c"
                }
            }
        }
        ,

        MuiCssBaseline: {
            styleOverrides: {
                a: {
                    color: "#3a94f1"
                }
            }
        },

        MuiSelect: {
            styleOverrides: {
                root: {
                    backgroundColor: "transparent",
                    outline: "none !important",
                    border: "none !important",
                    color: "#808080",
                    fontWeight: 500,
                    "& *": {
                        outline: "none !important",
                        border: "none !important",
                        padding: "0",
                    }
                }
            }
        }
    }
})

root.render(
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <App/>
    </ThemeProvider>
);

reportWebVitals();
