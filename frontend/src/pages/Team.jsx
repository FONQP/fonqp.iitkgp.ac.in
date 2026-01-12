import { Card, CardBody, Typography, Tooltip } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { GlobeAltIcon } from "@heroicons/react/24/solid";
import { FaGithub } from "react-icons/fa";

import { sir, PostDocs, PhDStudents, TPStudents, TPAlumni } from "../data/Team";

export default function Team() {
    const renderLinks = (member) => (
        <div className="flex gap-3 mt-2 justify-center lg:justify-start items-center">
            {member.email && (
                <Tooltip content="Email">
                    <Link to={`mailto:${member.email}`} target="_blank" rel="noopener noreferrer">
                        <img src="/public/team/email.png" alt="email" className="h-4" />
                    </Link>
                </Tooltip>
            )}
            {member.googleScholar && (
                <Tooltip content="Google Scholar">
                    <Link to={member.googleScholar} target="_blank" rel="noopener noreferrer">
                        <img src="/public/team/scholar.png" alt="Google Scholar" className="h-5" />
                    </Link>
                </Tooltip>
            )}
            {member.github && (
                <Tooltip content="GitHub">
                    <Link to={member.github} target="_blank" rel="noopener noreferrer">
                        <FaGithub className="w-5 h-5 text-gray-800" />
                    </Link>
                </Tooltip>
            )}
            {member.website && (
                <Tooltip content="Website">
                    <Link to={member.website} target="_blank" rel="noopener noreferrer">
                        <GlobeAltIcon className="w-5 h-5 text-blue-500" />
                    </Link>
                </Tooltip>
            )}
        </div>
    );

    const renderCards = (members) => (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {members.map((member) => (
                <Card
                    key={member.name}
                    shadow={false}
                    className="flex flex-col items-center justify-center p-6"
                >
                    <CardBody className="flex flex-col items-center text-center">
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-24 h-24 rounded-full object-cover mb-4"
                        />
                        <Typography variant="h6">{member.name}</Typography>
                        <Typography className="text-sm text-gray-500">
                            {member.description}
                        </Typography>
                        {renderLinks(member)}
                    </CardBody>
                </Card>
            ))}
        </div>
    );

    return (
        <>
            <Typography variant="h2" className="text-center text-blue-gray-800">
                Our Group
            </Typography>

            <div className="max-w-7xl mx-auto p-6 mt-12 rounded-xl shadow-xl bg-white">
                <div className="mb-16 flex flex-col lg:flex-row items-center gap-6 justify-center">
                    <img
                        src={sir.image}
                        alt={sir.name}
                        className="w-36 h-36 object-cover rounded-full shadow"
                    />
                    <div className="text-center lg:text-left">
                        <Typography variant="h4" className="text-gray-900">{sir.name}</Typography>
                        <Typography variant="h6" className="text-gray-700">{sir.designation}</Typography>
                        <Typography className="text-sm text-gray-600">{sir.description}</Typography>
                        {renderLinks(sir)}
                    </div>
                </div>

                <Typography variant="h5" className="text-center mb-6 text-gray-800 font-semibold">
                    Post Doctoral Researchers
                </Typography>
                {renderCards(PostDocs)}

                <Typography variant="h5" className="text-center mb-6 text-gray-800 font-semibold">
                    PhD Students
                </Typography>
                {renderCards(PhDStudents)}

                <Typography variant="h5" className="text-center mb-6 text-gray-800 font-semibold">
                    BTech/Mtech/MS Students
                </Typography>
                {renderCards(TPStudents)}

                <Typography variant="h5" className="text-center mb-6 text-gray-800 font-semibold">
                    Alumni
                </Typography>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {TPAlumni.map((alum, index) => (
                        <Typography key={index} className="text-gray-700 text-center">
                            {alum}
                        </Typography>
                    ))}
                </div>
            </div>
        </>
    );
}