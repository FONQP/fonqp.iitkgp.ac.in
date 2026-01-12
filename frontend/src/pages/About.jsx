import {
    Typography,
    Card,
    CardBody,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <>
            <Typography variant="h2" className="text-center text-blue-gray-800">
                About Us
            </Typography>

            <Typography variant="h5" className="mx-auto max-w-screen-2xl pt-12 px-2 text-justify font-normal text-gray-800">
                <p className="mb-4">
                    Our group led by Prof. Shailendra Varshney, is in the Department of Electronics & Electrical Communication Engineering, Indian Institue of Technology Kharagpur, India. We works on a very diversified field of research ranging from fiber optics,
                    underwater communication, nonlinearity in waveguide, dielectric metasurface, and
                    quantum photonics.
                </p>

                <img
                    src="/public/about/rrmodule.jpeg"
                    alt="Quantum Lab"
                    className="float-right w-96 h-auto ml-6 mb-4 rounded-md shadow-md"
                />

                <p className="mb-4">
                    The <strong>Fiber Optics, Nano &amp; Quantum Photonics (FONQP) Group</strong> at the
                    Advanced Photonics Laboratory is dedicated to cutting-edge research across diverse
                    domains of photonics, encompassing both theoretical investigations and experimental
                    advancements. Our group strives to explore fundamental light-matter interactions while
                    translating these discoveries into next-generation photonic technologies.
                </p>


                <p className="mb-4">
                    At present, our primary research thrusts include:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>
                        <strong>Nonlinear Photonics:</strong> Multimode nonlinear fiber optics, nonlinear
                        dynamics in silicon photonics, and advanced light manipulation techniques.
                    </li>
                    <li>
                        <strong>Quantum Photonics:</strong> Quantum communication protocols, generation and
                        manipulation of single photons and entangled photon pairs, and cavity quantum
                        electrodynamics (QED) for enhanced quantum interactions.
                    </li>
                    <li>
                        <strong>Optical Wireless Communication:</strong> High-speed indoor optical wireless
                        systems and underwater optical communication technologies aimed at extending the
                        reach and reliability of data transmission.
                    </li>
                    <li>
                        <strong>Fiber-Optic Metadevices:</strong> Development of novel metadevices leveraging
                        the unique properties of fiber platforms for advanced sensing and light control.
                    </li>
                </ul>

                <img
                    src="/public/about/ftir.jpeg"
                    alt="Fiber Optics"
                    className="float-left w-96 h-auto mr-6 mb-8 rounded-xl shadow-md"
                />
                <p className="mb-4">
                    Our laboratory is well-equipped with state-of-the-art facilities for experimental
                    research, including:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>
                        High-Resolution Optical Spectrum Analyzer (Yokogawa, 10 nm resolution) for precision
                        spectral measurements.
                    </li>
                    <li>
                        Tunable Laser Sources (1440-1640 nm) for wideband experimental flexibility.
                    </li>
                    <li>
                        1064 nm and sub-nanosecond pulsed laser sources for nonlinear optical studies.
                    </li>
                    <li>
                        Fourier transform infrared spectroscopy (FTIR) whose working range is 4-16 μm.
                    </li>
                </ul>

                <p>
                    Through a blend of fundamental research and applied innovation, the FONQP Group aims
                    to advance the frontiers of photonics and contribute to the development of future
                    quantum and optical technologies.
                </p>

                <p>
                    We are looking out for enthusiastic and motivated students and researchers to join our group especially in the domain of Quantum Photonics.
                    For contact, please see the <Link to="/contact" className="text-blue-600 underline">Contact Us</Link> page.
                </p>
            </Typography>
        </>
    );
}
