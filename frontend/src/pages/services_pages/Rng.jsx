import { Link } from "react-router-dom";
import { Button, Card, Typography } from "@material-tailwind/react";
import { ExclamationTriangleIcon, DocumentArrowDownIcon } from '@heroicons/react/24/solid';

const installers = [
    {
        name: "Windows",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Windows_logo_-_2021.svg/250px-Windows_logo_-_2021.svg.png",
        options: [
            { label: ".msi", link: "/services/rng/rng-toolbox/msi/RNG Toolbox_0.1.0_x64_en-US.msi" },
            { label: "nsis", link: "/services/rng/rng-toolbox/nsis/RNG Toolbox_0.1.0_x64-setup.exe" },
        ],
    },
    {
        name: "Linux",
        icon: "https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg",
        options: [
            { label: ".deb", link: "/services/rng/rng-toolbox/deb/RNG Toolbox_0.1.0_amd64.deb" },
            { label: ".rpm", link: "/services/rng/rng-toolbox/rpm/RNG Toolbox-0.1.0-1.x86_64.rpm" },
            { label: "AppImage", link: "/services/rng/rng-toolbox/appimage/RNG Toolbox_0.1.0_amd64.AppImage" },
        ],
    },
];

export default function Rng() {
    return (
        <div className="text-center">
            <Typography variant="h2" className="text-blue-gray-800 mb-4 font-semibold">
                Explore our True Random Number Generators
            </Typography>
            <Typography variant="h3" className="text-xl mb-12" color="gray">
                Conditioned by Borel Selector
            </Typography>

            <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x-2 md:divide-gray-300">
                <UsbSection />
                <FemtoSection />
            </div>

            <InstallerSection />

            <Typography variant="h5" color="gray" className="font-semibold">
                Visit <Link to="/contact" className="text-teal-600 hover:underline font-semibold">Contact Page</Link> for feature requests & integrations
            </Typography>
        </div>
    );
}

function UsbSection() {
    return (
        <div>
            <Typography className="text-gray-600 text-2xl font-bold mb-4">USB TRNG</Typography>
            <Typography className="text-md text-gray-500">Indian Patent filed (202431022600)</Typography>

            <a href="/services/rng/FONQP RNG Brochure.pdf">
                <Button className="bg-cyan-300 hover:bg-cyan-400 my-10">
                    <div className="flex items-center gap-2">
                        <DocumentArrowDownIcon className="h-4" />
                        Brochure
                    </div>
                </Button>
            </a>

            <div className="mx-auto max-w-2xl aspect-video rounded-xl shadow overflow-hidden">
                <iframe
                    src="https://drive.google.com/file/d/1_zNnv8L8PQixHBHwuMVZAh62Y-JYjZiv/preview"
                    width="100%"
                    height="100%"
                    allow="autoplay"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}

function FemtoSection() {
    return (
        <div>
            <Typography className="text-gray-600 text-2xl font-bold mb-4">Femtosecond Pulsing</Typography>
            <Typography className="text-md text-gray-500">Entropy-as-a-Service</Typography>

            <a href="https://doi.org/10.1103/pnyx-thqz">
                <Button className="bg-teal-300 hover:bg-teal-400 my-10">
                    <div className="flex items-center gap-2">
                        <DocumentArrowDownIcon className="h-4" />
                        Paper
                    </div>
                </Button>
            </a>

            <img
                src="/services/eaas.png"
                alt="Femtosecond"
                className="rounded-xl mx-auto max-w-2xl object-cover"
            />

            <Typography className="text-xl text-orange-500 font-bold flex items-center justify-center gap-2 my-6">
                <ExclamationTriangleIcon className="h-5 text-orange-500" />
                Laser Offline
            </Typography>

            <div className="flex items-center justify-center gap-4">
                <Button className="bg-purple-600 hover:bg-purple-700" disabled>
                    Generate
                </Button>
                <div className="text-sm px-4 py-3 rounded-md border text-gray-700 shadow">
                    11011100101010101001011011...
                </div>
            </div>
        </div>
    );
}

function InstallerSection() {
    return (
        <div id="download" className="py-12 bg-transparent text-center">
            <div className="mb-8">
                <Typography variant="h3" color="blue-gray" className="text-2xl font-semibold">
                    Download RNG Toolbox
                </Typography>
                <Typography className="text-gray-600 dark:text-gray-300 mt-2">
                    Select your OS and preferred installer format
                </Typography>
            </div>

            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto">
                {installers.map((os) => (
                    <Card
                        key={os.name}
                        className="flex flex-col items-center justify-between p-6 shadow hover:shadow-lg"
                    >
                        <img
                            src={os.icon}
                            alt={os.name}
                            className="h-16 w-16 object-contain mb-4"
                        />
                        <Typography variant="h6" className="mb-4 text-center">
                            {os.name}
                        </Typography>

                        <div className="flex flex-wrap justify-center gap-3">
                            {os.options.map((opt) => (
                                <a key={opt.label} href={opt.link} download>
                                    <Button size="sm" className="bg-blue-400 hover:bg-blue-600 text-white">
                                        {opt.label}
                                    </Button>
                                </a>
                            ))}
                        </div>
                    </Card>
                ))}
            </div>

            <Typography variant="h5" className="text-gray-800 mt-10 font-semibold">
                Features
            </Typography>
            <Typography variant="h6" className="text-gray-700 mt-4 font-normal">
                Hardware interfaces: USB, Remote URL, OS Entropy Pool<br />

                Conditioners: XOR, Toeplitz Hashing<br />

                Cryptographic Algorithms: AES-256, RSA-2048, SHA-256<br />

                Can mix connected hardware RNG entropy in the OS entropy pool<br />

                Test your RNG and other applications
            </Typography>
        </div>
    );
}

