import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../components/Home/Home";

const Routess = () => {

    return (
        <>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route exact path="/" element={<Home />}/>
                    </Routes>
                </Layout>
            </BrowserRouter>
        </>
    )

}
export default Routess;