import React from "react";
import {
    Typography,
} from "@material-tailwind/react";
import { newsItems } from "../data/News";

export default function News() {
    return (
        <>
            <Typography variant="h2" className="text-center text-blue-gray-800">
                News
            </Typography>

            <div className="flex justify-center">
                <div className="w-full sm:px-4 md:max-w-[80%] mt-12">
                    <div className="divide-y divide-gray-300">
                        {newsItems.map((item, idx) => (
                            <div
                                key={idx}
                                className="py-4"
                            >
                                <Typography variant="h5" className="font-semibold mb-1">
                                    {item.title}
                                </Typography>
                                <Typography className="text-gray-700 text-sm leading-relaxed">
                                    {item.date}
                                </Typography>
                                <Typography className="text-gray-700 text-sm leading-relaxed">
                                    {item.news}
                                </Typography>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
