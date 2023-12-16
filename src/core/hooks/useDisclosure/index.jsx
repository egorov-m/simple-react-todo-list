import {useState} from "react";

export const useDisclosure = (initialState) => {
    const [visible, setVisible] = useState(initialState);

    const open = () => {
        setVisible(true);
    };

    const close = () => {
        setVisible(false);
    };

    const toggle = () => {
        setVisible((prevVisible) => !prevVisible);
    };

    return [visible, { open, close, toggle }];
};
