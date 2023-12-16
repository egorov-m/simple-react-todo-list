import React from "react";

import {RoutesMain} from "./components/routes/main"

import {RootStore} from "./core/stores/rootStore";
import {StoreProvider} from "./core/stores/useStore";
import {ThemeProvider} from "./core/themes";

const globalStore = new RootStore();

const App = () => {
    return (
        <ThemeProvider root={document.documentElement}>
            <StoreProvider store={globalStore}>
                <RoutesMain />
            </StoreProvider>
        </ThemeProvider>
    );
};

export default App;
