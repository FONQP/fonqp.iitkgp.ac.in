import { Outlet, useMatches } from "react-router-dom";

export default function Wrapper() {
    const matches = useMatches();

    const currentPath = matches[matches.length - 1]?.pathname;
    const showBackground = currentPath !== "/services/";

    const bkg =
        [...matches]
            .reverse()
            .find(m => m.handle?.bkg)?.handle.bkg || "/gen_bkg.jpg";

    const isDefault = bkg === "/gen_bkg.jpg";
    const bgClasses = isDefault
        ? "bg-repeat bg-[length:600px_600px] bg-center"
        : "bg-no-repeat bg-cover bg-center";

    return (
        <main
            className={`
                relative flex flex-col flex-grow
                ${showBackground ? bgClasses : ""}
            `}
            style={
                showBackground
                    ? { backgroundImage: `url(${bkg})` }
                    : undefined
            }
        >
            {showBackground && <div className="absolute inset-0 bg-white/95 pointer-events-none z-10" />}
            <div className="flex flex-col flex-grow relative px-2 py-12 z-20">
                <Outlet />
            </div>
        </main>
    );
}
