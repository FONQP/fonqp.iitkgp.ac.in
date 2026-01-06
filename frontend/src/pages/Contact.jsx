import { Card, CardBody, Typography, Tooltip } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function Contact() {

    return (
        <>
            <Typography variant="h2" className="text-center text-blue-gray-800">
                Contact Us
            </Typography>

            <div className="grid grid-cols-1 md:grid-cols-2 mt-12 gap-8 text-center">
                <div className="flex flex-col items-center justify-center px-8">
                    <Typography variant="h3" className="mb-4">
                        Address
                    </Typography>
                    <Typography variant="h5" className="text-gray-700">
                        Department of Electronics and Electrical Communication Engineering,<br />
                        Indian Institute of Technology (IIT) Kharagpur,<br />
                        Kharagpur, West Bengal, India - 721302<br />
                    </Typography>
                    <Typography variant="h5" className="text-gray-700 mt-8">
                        +91-3222-283504
                    </Typography>
                    <Typography variant="h5" className="text-gray-700 mt-8">
                        Email: <Link to="mailto:skvarshney@ece.iitkgp.ac.in">skvarshney@ece.iitkgp.ac.in</Link>
                    </Typography>
                </div>

                <div className="flex items-center justify-center px-8">
                    <div className="w-full max-w-xl aspect-square rounded-xl overflow-hidden shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1154.3865732360907!2d87.30935437557638!3d22.32075625577559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1d44051bb249f1%3A0xbc55aab24e688180!2sDepartment%20of%20Electronics!5e0!3m2!1sen!2sin!4v1727809827849!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            loading="lazy"
                            allowFullScreen
                            className="border-0"
                        ></iframe>
                    </div>
                </div>
            </div>
        </>
    );
}