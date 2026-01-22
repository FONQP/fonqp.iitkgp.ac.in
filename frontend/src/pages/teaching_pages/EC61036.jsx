import React from "react";
import {
    Typography,
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
    Spinner,
} from "@material-tailwind/react";
import { ArrowDownTrayIcon, PresentationChartBarIcon } from "@heroicons/react/24/outline";
import { Suspense } from "react";
import { SLIDE_ITEMS } from "../../data/teaching_notes/EC61036";

const LectureNotes = React.lazy(() => import("./EC61036notes"));

const TABLE_HEAD = ["Module", "Topic", "Lectures"];

const SYLLABUS_ROWS = [
    {
        module: "1",
        title: "Introduction to photonic architectures, and its global perspective; why silicon photonics, and its importance",
        lectures: "01",
    },
    {
        module: "2",
        title: "Optical waveguides- Planar waveguides (1D), 2D and 3D waveguides, slot waveguides; modal analysis, light guidance in waveguides, losses, dispersion, polarization issues, Effect of stress; Single-mode condition, cut-off",
        lectures: "05",
    },
    {
        module: "3",
        title: "Coupling Mechanism: off-chip coupling, tapers and grating coupler",
        lectures: "03",
    },
    {
        module: "4",
        title: "Photonic components: Straight Waveguide, Bends, Directional Couplers, Star coupler, switch, Multimode Interference Coupler, Y-junction, Mach–Zehnder Interferometer, AWG, TE-TM mode converter, etc.",
        lectures: "05",
    },
    {
        module: "5",
        title: "Modulators: optical modulation, Figure of merit, Mechanisms for Optical Modulation, free carrier based waveguide integrated optical modulation",
        lectures: "04",
    },
    {
        module: "6",
        title: "Resonant structures: resonant cavity structures (micro-disc, micro-ring), Cavity-guide cascading, Diffractive Si resonant structures: photonic crystals, slow light in photonic crystal waveguides",
        lectures: "04",
    },
    {
        module: "7",
        title: "Optical interconnects, micro-ring resonator and its applications, WGM on chip; Optical amplification and laser diodes; Silicon nanocrystals, Silicon Raman Laser; Photo detectors: Absorption mechanisms, basics on photodetector characteristics, quantum efficiency, waveguide-based photodetectors",
        lectures: "05",
    },
    {
        module: "8",
        title: "Nonlinear processes: four-wave mixing, cross-phase modulation, self-phase modulation; supercontinuum in optical waveguides; solitons; cavity solitons; bistability, optical buffer; on-chip photon-pair generation; frequency comb;",
        lectures: "05",
    },
    {
        module: "9",
        title: "Fabrication of silicon photonics devices, convergence between photonics and CMOS VLSI for silicon photonics, e-beam lithography, UV lithography, packaging, etc.",
        lectures: "04",
    },
    {
        module: "10",
        title: "Applications: silicon photonics for biological applications, silicon based photovoltaics, silicon organic hybrid devices, plasmonics-photonics integration; CMOS compatible materials for nanophotonic applications; network on-chip.",
        lectures: "04",
    },
];

export default function EC61036() {
    const [activeTab, setActiveTab] = React.useState("syllabus");
    const [showNotes, setShowNotes] = React.useState(false);

    return (
        <div className="flex flex-col items-center py-10">
            <Typography variant="h2" className="text-center text-blue-gray-800">
                Integrated Nanophotonics (EC61036)
            </Typography>
            <Typography
                variant="h5"
                className="text-gray-700 text-center leading-relaxed pt-4"
            >
                Prof. Shailendra K. Varshney (<a href="mailto:skvarshney@ece.iitkgp.ac.in" className="text-blue-600 hover:underline">skvarshney@ece.iitkgp.ac.in</a>)
            </Typography>

            <Typography
                variant="h6"
                className="text-gray-700 text-center leading-relaxed pt-4"
            >
                Teaching Assistant: Shubhanshi Sharma (<a href="mailto:shubhanshi0107@gmail.com" className="text-blue-600 hover:underline">shubhanshi0107@gmail.com</a>)
            </Typography>

            <div className="w-full px-4 md:max-w-[80%] mt-12">
                <div className="mb-10">
                    <Typography variant="h4" className="text-gray-700 leading-relaxed">
                        Logistics:
                    </Typography>
                    <Typography className="text-gray-700 text-lg leading-relaxed pt-2">
                        <strong>Class timings:</strong> Monday (10:00 AM - 11:00 AM), Wednesday (08:00 AM - 10:00 AM), Thursday (10:00 AM - 11:00 AM)
                    </Typography>
                    <Typography className="text-gray-700 text-lg leading-relaxed pt-1">
                        <strong>Venue:</strong> A-102, Department of E&ECE, IIT Kharagpur
                    </Typography>

                    <Typography variant="h4" className="text-gray-700 leading-relaxed pt-6">
                        Grading Policy:
                    </Typography>
                    <ul className="list-none pl-6 pt-2 text-gray-700 text-lg">
                        <li>Attendance: 10%</li>
                        <li>Class tests and quizzes: 30%</li>
                        <li>Mid-semester: 30%</li>
                        <li>End-semester: 30%</li>
                    </ul>
                    <Typography variant="h4" className="text-gray-700 leading-relaxed pt-6">
                        Suggested Readings:
                    </Typography>
                    <ul className="list-disk pt-2 text-gray-700 text-lg">
                        <li>B.E. A. Saleh Fundamentals of Photonics</li>
                        <li>L. Pavesi, Silicon Photonics (Springer)</li>
                        <li>L. Pavesi edited, Handbook of Silicon Photonics (CRC Press)</li>
                        <li>L. Chrostowski and M. Hochberg, Silicon Photonics Design from Devices to Systems (Cambridge Univ. Press)</li>
                        <li>S. Fathpour and B. Jalali, Silicon photonics for Telecommunication and Biomedicine (CRC Press)</li>
                        <li>D.J. Lockwood and L. Pavesi, Silicon Photonics II , Components and Integration (Springer)</li>
                    </ul>
                    <Typography
                        variant="h4"
                        className="text-gray-700 leading-relaxed pt-6 cursor-pointer hover:text-blue-600 transition-colors"
                        onClick={() => {
                            setShowNotes(true);
                            setTimeout(() => {
                                const element = document.getElementById("notes");
                                if (element) {
                                    element.scrollIntoView({
                                        behavior: "smooth",
                                        block: "start"
                                    });
                                }
                            }, 100);
                        }}
                    >
                        Click to view lecture notes
                    </Typography>
                </div>

                <Tabs value={activeTab}>
                    <TabsHeader
                        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0 mb-6"
                        indicatorProps={{
                            className:
                                "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
                        }}
                    >
                        <Tab value="syllabus" onClick={() => setActiveTab("syllabus")}>
                            Syllabus
                        </Tab>
                        <Tab value="slides" onClick={() => setActiveTab("slides")}>
                            Slides
                        </Tab>
                        <Tab value="assignments" onClick={() => setActiveTab("assignments")}>
                            Assignments
                        </Tab>
                    </TabsHeader>

                    <TabsBody>
                        <TabPanel value="syllabus" className="p-0">
                            <div className="overflow-x-auto w-full">
                                <table className="w-full min-w-max table-auto text-left">
                                    <thead>
                                        <tr>
                                            {TABLE_HEAD.map((head) => (
                                                <th
                                                    key={head}
                                                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                                                >
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-bold leading-none opacity-70 text-center"
                                                    >
                                                        {head}
                                                    </Typography>
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {SYLLABUS_ROWS.map(({ module, title, lectures }, index) => {
                                            const isLast = index === SYLLABUS_ROWS.length - 1;
                                            const classes = isLast
                                                ? "p-4"
                                                : "p-4 border-b border-blue-gray-50";

                                            return (
                                                <tr key={module} className="even:bg-blue-gray-50/50">
                                                    <td className={classes}>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal text-center"
                                                        >
                                                            {module}
                                                        </Typography>
                                                    </td>
                                                    <td className={`${classes} max-w-xl`}>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal whitespace-normal"
                                                        >
                                                            {title}
                                                        </Typography>
                                                    </td>
                                                    <td className={classes}>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal text-center"
                                                        >
                                                            {lectures}
                                                        </Typography>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </TabPanel>

                        <TabPanel value="slides" className="p-0 py-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {SLIDE_ITEMS.map((slide, index) => (
                                    <div key={index} className="border border-gray-200 rounded-lg shadow-md p-4 flex flex-col">
                                        <Typography variant="h6" className="mb-4 text-gray-800">
                                            {slide.title}
                                        </Typography>
                                        <div className="flex-1 mb-4">
                                            <iframe
                                                src={slide.previewLink}
                                                title={slide.title}
                                                width="100%"
                                                height="250px"
                                                className="border border-gray-300 rounded"
                                            ></iframe>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </TabPanel>

                        <TabPanel value="assignments">
                            <Typography>No Assignments Yet !</Typography>
                        </TabPanel>
                    </TabsBody>
                </Tabs>

                <div id="notes" className="w-full flex justify-center mt-12">
                    {showNotes && (
                        <Suspense
                            fallback={
                                <div className="flex flex-col items-center gap-4 mt-10">
                                    <Spinner className="h-10 w-10 text-blue-500" />
                                    <Typography>Loading LaTeX Engine...</Typography>
                                </div>
                            }
                        >
                            <LectureNotes />
                        </Suspense>
                    )}
                </div>
            </div>
        </div>
    );
}