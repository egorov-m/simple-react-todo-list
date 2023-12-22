import React from "react";

import {RoutesMain} from "./components/routes/main"

import StoreProvider from "./core/stores";
import {ThemeProvider} from "./core/themes";


const App = () => {
    return (
        <ThemeProvider root={document.documentElement}>
            <StoreProvider>
                <RoutesMain />
            </StoreProvider>
        </ThemeProvider>
    );
};

export default App;
