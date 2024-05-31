import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
    return(
        <div className="root-layout">
            <Header />

            <main>
                <Outlet />
            </main>
        </div>
    )
}