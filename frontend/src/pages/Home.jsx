import { Link } from "react-router-dom";
import { Card, CardBody, Carousel, Typography } from "@material-tailwind/react";

import { newsItems } from "../data/News";
import { opportunities } from "../data/Opportunities";

export default function Home() {
    return (
        <>
            <div className="mx-auto max-w-screen-xl text-center">
                <Carousel
                    transition={{ duration: 2 }}
                    className="h-[70vh] rounded-xl shadow-xl"
                    prevArrow={() => null}
                    nextArrow={() => null}
                    autoplay={true}
                    autoplayDelay={5000}
                    loop={true}
                >
                    <img
                        src="/public/home/grp.jpg"
                        alt="Slide 1"
                        className="h-full w-full object-cover"
                    />
                    <img
                        src="/public/home/QuEd.jpg"
                        alt="Slide 2"
                        className="h-full w-full object-cover"
                    />
                    <img
                        src="/public/home/rr.jpg"
                        alt="Slide 4"
                        className="h-full w-full object-cover"
                    />
                    <img
                        src="/public/home/uw1.jpg"
                        alt="Slide 5"
                        className="h-full w-full object-cover"
                    />
                </Carousel>
            </div>

            <div className="mx-auto max-w-screen-xl py-16 text-center text-gray-700">
                <Typography variant="h1" color="blue-gray" className="mb-6 text-5xl font-semibold">
                    Fiber Optics, Nano & Quantum Photonics (FONQP) Group
                </Typography>
                <Typography variant="h3" className="text-2xl">
                    Advanced Photonics Lab, IIT Khargpur
                </Typography>
                <Typography className="pt-6 text-lg">
                    We are a research group led by Prof. Shailendra Varshney, working on fiber optics, underwater communication, nonlinearity in waveguide, dielectric metasurface, and quantum photonics.
                </Typography>

                <Typography
                    variant="h3"
                    color="blue-gray"
                    className="mb-8 text-center font-semibold py-12"
                >
                    Funding Agencies
                </Typography>
                <div className="flex flex-wrap justify-center items-center gap-24">
                    <img src="/public/home/dst.png" alt="DST" className="h-32 w-auto" />
                    <img src="/public/home/nqm.png" alt="NQM" className="h-32 w-auto" />
                    <img src="/public/home/moes.png" alt="MOES" className="h-32 w-auto" />
                    <img src="/public/home/cdot.png" alt="CDOT" className="h-32 w-auto" />
                    <img src="/public/home/niot.png" alt="NIOT" className="h-32 w-auto" />
                </div>
            </div>

            <NewsPanel />
            <OpportunitiesPanel />
        </>
    );
}

function NewsPanel() {
    newsItems.splice(3);
    return (
        <div className="max-w-6xl mx-auto py-12">
            <Typography
                variant="h3"
                color="blue-gray"
                className="mb-8 text-center font-semibold"
            >
                News
            </Typography>

            <div className="grid gap-6 md:grid-cols-3">
                {newsItems.map((item, idx) => (
                    <Card key={idx} className="shadow-none bg-transparent">
                        <CardBody>
                            <Typography variant="small" className="text-gray-500 mb-2">
                                {item.date}
                            </Typography>
                            <Typography variant="h5" className="mb-2 font-semibold">
                                {item.title}
                            </Typography>
                            <Typography className="text-gray-700 text-sm leading-relaxed">
                                {item.news}
                            </Typography>
                        </CardBody>
                    </Card>
                ))}
            </div>

            <Typography className="pt-6 text-center text-sm text-gray-600">
                <Link to="/news" className="underline hover:text-blue-600">
                    News Archive
                </Link>
            </Typography>
        </div>
    );
}

export function OpportunitiesPanel() {
    return (
        <div className="max-w-5xl mx-auto pt-12">
            <Typography
                variant="h3"
                color="blue-gray"
                className="mb-8 text-center font-bold"
            >
                Opportunities
            </Typography>

            <div className="divide-y divide-gray-300">
                {opportunities.map((item, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col md:flex-row md:items-center justify-between py-4"
                    >
                        {/* Left side: title + description */}
                        <div className="md:w-3/4">
                            <Typography variant="h5" className="font-semibold pb-1">
                                {item.title}
                            </Typography>
                            <Typography className="text-gray-700 text-sm leading-relaxed">
                                {item.description}
                            </Typography>
                        </div>

                        {/* Right side: duration */}
                        <div className="mt-2 md:mt-0 md:w-1/4 text-right">
                            <Typography className="text-gray-600 text-sm font-medium">
                                {item.duration}
                            </Typography>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
