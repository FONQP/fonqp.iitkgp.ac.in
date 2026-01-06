import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/Layout";
import Wrapper from "./Wrapper";

const Home = lazy(() => import("../pages/Home"));
const News = lazy(() => import("../pages/News"));
const About = lazy(() => import("../pages/About"));
const Team = lazy(() => import("../pages/Team"));
const Publications = lazy(() => import("../pages/Publications"));
const Contact = lazy(() => import("../pages/Contact"));

const Teaching = lazy(() => import("../pages/Teaching"));
const EC61036 = lazy(() => import("../pages/teaching_pages/EC61036"));

const Services = lazy(() => import("../pages/Services"));
const Rng = lazy(() => import("../pages/services_pages/Rng"));
const Metamizer = lazy(() => import("../pages/services_pages/Metamizer"));
const Datasets = lazy(() => import("../pages/services_pages/Datasets"));
const NotFound = lazy(() => import("../pages/NotFound"));

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                element: <Wrapper />,
                children: [
                    { path: "/", element: <Home /> },
                    { path: "/news", element: <News /> },
                    { path: "/about", element: <About /> },
                    { path: "/team", element: <Team /> },
                    { path: "/publications", element: <Publications /> },
                    { path: "/contact", element: <Contact /> },
                    { path: "/test", element: <div>Test Page</div> },

                    {
                        path: "/teaching",
                        children: [
                            { index: true, element: <Teaching /> },
                            {
                                path: "EC61036",
                                element: <EC61036 />,
                            },
                        ],
                    },

                    {
                        path: "/services",
                        children: [
                            { index: true, element: <Services /> },
                            {
                                path: "rng",
                                element: <Rng />,
                                handle: { bkg: "/services/rng-bkg.png" },
                            },
                            {
                                path: "metamizer",
                                element: <Metamizer />,
                                handle: { bkg: "/services/MetaMizer-bkg.png" },
                            },
                            {
                                path: "datasets",
                                element: <Datasets />,
                                handle: { bkg: "/services/MetaMizer-bkg.png" },
                            },
                        ],
                        handle: { bkg: null }
                    },
                ],
            },
            { path: "*", element: <NotFound /> },
        ],
    },
]);