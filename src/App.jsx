import React from "react";

import {RoutesMain} from "./components/routes/main"

import {QueryClient, QueryClientProvider} from "react-query";


const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <RoutesMain />
        </QueryClientProvider>
    );
};

export default App;
