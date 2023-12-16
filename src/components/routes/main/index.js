import React from "react";
import {createHashRouter, Navigate, RouterProvider} from "react-router-dom";
import {MainLayout} from "../../common/Main/MainLayout";
import {NotFoundPage} from "../../pages/NotFound";
import {HomePage} from "../../pages/Home";

const router = createHashRouter([
    {
        path: "/",
        element: <Navigate to={"/home"} />
    },
    {
        path: "/home",
        element: <MainLayout>
            <HomePage />
        </MainLayout>
    },
    {
        path: "*",
        element: <MainLayout>
            <NotFoundPage />
        </MainLayout>
    }
]);

export const RoutesMain = () => {
    return (
        <RouterProvider router={router} />
    );
};
