import React from 'react';
import {Box, Container} from "@mui/material";
import {Header} from "./layouts/header/Header";
import {Main} from "./layouts/main/Main";
import {Solutions} from "./layouts/solutions/Solutions";
import {About} from "./layouts/about/About";
import {Footer} from "./layouts/footer/Footer";

function App() {
    return (
        <Box
            overflow={"hidden"}
        >
            <Container maxWidth="lg">
                <Header/>
                <Main/>
                <About/>
                <Solutions/>
                <Footer/>
            </Container>
        </Box>
    );
}

export default App;
