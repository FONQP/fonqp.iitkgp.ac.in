import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
import PageLoader from "./Loading";

export default function Layout() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <Suspense fallback={<PageLoader />}>
                <Outlet />
            </Suspense>
            <Footer />
        </div>
    );
}

