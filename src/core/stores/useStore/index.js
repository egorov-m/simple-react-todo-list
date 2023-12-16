import {createContext, ReactElement} from "react";
import type {RootStore} from "../rootStore";

export const StoreContext = createContext({});

export const StoreProvider = ({
    children,
    store
}) => (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
)
