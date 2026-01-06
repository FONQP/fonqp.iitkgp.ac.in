import { Link } from "react-router-dom";
import { Button, Typography } from "@material-tailwind/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export default function NotFound() {
    return (
        <>
            <div className="mx-auto flex-grow grid place-items-center text-center px-8">
                <div>
                    <ExclamationTriangleIcon className="w-20 h-20 mx-auto" />
                    <Typography
                        variant="h1"
                        color="blue-gray"
                        className="my-10 !text-3xl !leading-snug md:!text-4xl"
                    >
                        Error 404
                    </Typography>
                    <Typography
                        variant="h5"
                        color="blue-gray"
                        className="text-gray-600"
                    >
                        Oops! The page you are looking for does not exist.
                    </Typography>

                    <Link to="/">
                        <Button color="gray" className="w-full px-4 my-12 md:w-[8rem]">
                            back home
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    );
}