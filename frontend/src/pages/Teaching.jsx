import {
    Typography,
    Card,
    CardBody,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { courses } from "../data/Teaching";


export default function Teaching() {
    return (
        <>
            <Typography variant="h2" className="text-center text-blue-gray-800">
                Teaching
            </Typography>

            <Typography variant="h5" className="mx-auto max-w-screen-2xl pt-12 px-2 text-justify font-normal text-gray-800">
                <ul className="list-none list-inside mb-4">
                    {courses.map((course, index) => (
                        <li key={index}>
                            <Link to={course.link} className="text-blue-600 hover:underline">
                                {course.semester} - {course.title} ({course.code})
                            </Link>
                        </li>
                    ))}
                </ul>
            </Typography>
        </>
    );
}
