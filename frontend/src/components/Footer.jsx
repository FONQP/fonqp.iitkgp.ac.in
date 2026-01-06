import { Typography } from "@material-tailwind/react";

export default function SimpleFooter() {
    return (
        <>
            <footer className="w-full border-t border-blue-gray-100 p-6 text-center bg-white z-30">
                <Typography variant="small" className="text-blue-gray-600">
                    &copy; {new Date().getFullYear()} FONQP, IIT Kharagpur
                </Typography>
            </footer>
        </>
    );
}