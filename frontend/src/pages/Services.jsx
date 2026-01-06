import { Link } from "react-router-dom";
import { Typography, Button } from "@material-tailwind/react";

import { services } from "../data/Services";

export default function Services() {
    return (
        <div className="absolute inset-0 flex flex-col">
            <div className="flex-grow grid grid-cols-1 md:grid-cols-3">
                {services.map((service) => (
                    <div className="bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${service.bkg})`, backgroundSize: '300%' }} key={service.title}>
                        <div className="absolute inset-0 bg-white/50 pointer-events-none z-10" />

                        <div className="relative z-20 flex flex-col items-center justify-center px-8 text-center h-full py-12">
                            <img
                                src={service.logo}
                                alt={service.title}
                                className="mb-8 h-32 w-32 md:h-40 md:w-40 xl:h-96 xl:w-96 object-contain"
                            />

                            <Typography className="mb-8 max-w-md text-xl font-semibold text-gray-700">
                                {service.description}
                            </Typography>

                            <Link to={service.link}>
                                <Button size="lg" className={service.color}>
                                    {service.action}
                                </Button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
