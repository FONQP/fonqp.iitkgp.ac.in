import React from "react";
import {
    Navbar,
    Typography,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    IconButton,
} from "@material-tailwind/react";
import {
    Square3Stack3DIcon,
    ChevronDownIcon,
    Bars2Icon,
} from "@heroicons/react/24/solid";
import { useLocation, Link } from "react-router-dom";
import { services } from "../data/Services";

const navListItems = [
    {
        label: "About",
        link: "/about",
    },
    {
        label: "Team",
        link: "/team",
    },
    // {
    //     label: "Publications",
    //     link: "/publications",
    // },
    // {
    //     label: "Projects",
    //     link: "/projects",
    // },
    {
        label: "Teaching",
        link: "/teaching",
    },
    {
        label: "Services",
        link: "/services",
    },
    {
        label: "Contact",
        link: "/contact",
    },
];

function NavList() {
    const location = useLocation();
    const isStartService = location.pathname.startsWith("/services");
    const isServiceHome = location.pathname === "/services";
    const isServicePage = isStartService && !isServiceHome;

    return (
        <div className="flex w-full items-center justify-between">
            {!isServicePage && (
                <ul className="flex flex-col gap-2 lg:flex-row lg:items-center mx-auto">
                    {navListItems.map(({ label, link }) => (
                        <Typography
                            key={label}
                            as={Link}
                            to={link}
                            color="gray"
                            className="font-medium text-blue-gray-500"
                        >
                            <MenuItem className="flex items-center gap-2 bg-transparent lg:rounded-full">
                                <span className="text-gray-900">{label}</span>
                            </MenuItem>
                        </Typography>
                    ))}
                </ul>
            )}

            {!isServiceHome && isStartService && (
                <div className="ml-auto">
                    <ServicetMenu />
                </div>
            )}
        </div>
    );
}

export default function StickyNavbar() {
    const [openNav, setOpenNav] = React.useState(false);
    const toggleIsNavOpen = () => setOpenNav((cur) => !cur);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const location = useLocation();
    const isStartService = location.pathname.startsWith("/services");
    const isServiceHome = location.pathname === "/services";
    const isServicePage = isStartService && !isServiceHome;

    return (
        <>
            <Navbar
                fullWidth
                className="z-30 h-max max-w-full rounded-none py-4 bg-opacity-100"
            >
                <div className="flex items-center justify-between text-blue-gray-900">
                    <Link to="/" className="ml-2 flex-shrink-0">
                        <img
                            src="/logo-crp.png"
                            alt="FONQP Logo"
                            className="h-7 w-auto"
                        />
                    </Link>

                    {/* Mobile hamburger (hidden on lg) */}
                    <IconButton
                        size="sm"
                        color="blue-gray"
                        variant="text"
                        onClick={toggleIsNavOpen}
                        className="lg:hidden"
                    >
                        <Bars2Icon className="h-6 w-6" />
                    </IconButton>

                    {isServicePage && (
                        <div className="absolute left-1/2 -translate-x-1/2 hidden sm:block">
                            <img
                                src={
                                    services.find(
                                        (s) =>
                                            s.link === location.pathname
                                    )?.logo
                                }
                                alt="Page Logo"
                                className="h-12"
                            />
                        </div>

                    )}

                    <div className="flex items-center gap-4">
                        <div className="mr-4 hidden lg:block"><NavList /></div>
                    </div>
                </div>
                {openNav && (
                    <MobileNav open={openNav} className="lg:hidden overflow-scroll">
                        <NavList />
                    </MobileNav>
                )}
            </Navbar>
        </>
    );
}

const serviceMenuItems = services;

function ServicetMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const userType = localStorage.getItem("userType");

    const renderItems = serviceMenuItems
        .filter(({ auth }) => {
            if (auth === "all") return true;
            if (auth === "internal" && (userType === "admin" || userType === "internal")) return true;
            return false;
        })
        .map(({ title, logo, link }) => (
            <Link to={link} key={title}>
                <MenuItem className="p-1 flex justify-start bg-transparent hover:bg-transparent shadow-none border-none">
                    <img
                        src={logo}
                        alt={title}
                        className="h-6 w-auto object-contain bg-transparent"
                        style={{ backgroundColor: "transparent" }}
                    />
                </MenuItem>
            </Link>
        ));

    return (
        <>
            <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
                <MenuHandler>
                    <Typography as={Link} to="/services" variant="small" className="font-normal">
                        <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 bg-transparent lg:flex lg:rounded-full">
                            <Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-500" />
                            Services
                            <ChevronDownIcon
                                strokeWidth={2}
                                className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""}`}
                            />
                        </MenuItem>
                    </Typography>
                </MenuHandler>

                <MenuList className="hidden flex-col gap-1 p-2 lg:flex w-48">
                    {renderItems}
                </MenuList>
            </Menu>

            {/* Mobile version fallback */}
            <MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
                <Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-500" />
                Services
            </MenuItem>
            <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
                {serviceMenuItems
                    .filter(({ auth }) => auth === "all" || (auth === "internal" && (userType === "admin" || userType === "internal")))
                    .map(({ title, link }) => (
                        <Link to={link} key={title}>
                            <MenuItem>{title}</MenuItem>
                        </Link>
                    ))}
            </ul>
        </>
    );
}
