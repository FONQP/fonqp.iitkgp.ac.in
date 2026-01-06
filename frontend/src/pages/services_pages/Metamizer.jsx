import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Typography,
    Button,
    Textarea,
    Spinner,
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from '@material-tailwind/react';
import {
    VariableIcon,
    ChevronDownIcon,
    CubeTransparentIcon,
    BeakerIcon,
    ArrowDownOnSquareStackIcon,
    PaperAirplaneIcon,
    LanguageIcon,
} from '@heroicons/react/24/solid';
import { FaRegFilePdf } from 'react-icons/fa6';

// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, useGLTF } from '@react-three/drei';
import Skeleton from '../../components/Skeleton';
// import ExportDialog from '../components/Export';
import NotLoggedInMessage from '../../components/NotLoggedIn';
import { services } from '../../data/Services';

export default function Metamizer() {
    const isLoggedIn = localStorage.getItem("authToken") !== null;
    const [inference, setInference] = useState(false);

    return (
        <>
            {!isLoggedIn && <NotLoggedInMessage />}

            {/* <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                <div className="md:col-span-3 bg-gray-100 p-6 rounded-lg">
                    Left Section (60%)
                </div>

                <div className="md:col-span-2 bg-gray-200 p-6 rounded-lg">
                    Right Section (40%)
                </div>
            </div> */}
            <div className="relative h-[85vh] grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="md:col-span-3 px-6">
                    <LeftSection setInference={setInference} />
                </div>

                <div className="md:col-span-2 px-6">
                    <RightSection inference={inference} setInference={setInference} />
                </div>
            </div>

            <div className="text-center pt-8 flex-grow justify-center">
                <img src={services[0].logo} alt="Metamizer Logo" className="mx-auto h-36 object-contain mb-4" />
                <Typography variant="h2" className="text-gray-600">
                    AI based Metamaterial Designing
                </Typography>
                <div className="flex flex-row justify-center space-x-4">
                    <Link to="/rng-brochure.pdf">
                        <Button className="bg-teal-300 hover:bg-teal-400 my-10 text-md">
                            <div className="flex items-center gap-2">
                                <FaRegFilePdf  />
                                Paper
                            </div>
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    );
}

function LeftSection({ setInference }) {
    return (
        <div className="h-full w-full items-center justify-center flex flex-col">
            <ModelDropdown />

            <div
                // onDrop={handleDrop}
                // onDragOver={(e) => e.preventDefault()}
                onClick={() => document.getElementById("file-input").click()}
                className="h-[50%] my-4 aspect-video border-2 border-dashed border-purple-500 rounded-lg flex flex-col items-center justify-center text-center cursor-pointer"
            >
                <input
                    id="file-input"
                    type="file"
                    className="hidden"
                    accept=".csv,image/*"
                // onChange={handleFileChange}
                />
                {/* {!previewImageUrl && (<Typography variant="h6" className="text-cyan-800 z-20">
                {file ? file.name : "Drag & Drop or Click to Upload a CSV/Image"}
            </Typography>)} */}
                <Typography variant="h6" className="text-cyan-800">
                    "Drag & Drop or Click to Upload a CSV/Image"
                </Typography>
            </div>

            <div className="flex justify-center items-center space-x-4 mb-4">
                <Button
                    // onClick={handleClear}
                    className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700"
                    fullWidth={true}
                >
                    Plot Response
                </Button>
            </div>

            <div className="flex flex-col flex-grow w-full border-t border-gray-200 space-y-2">
                <Textarea
                    label="Prompt the LLM..."
                    // value={text}
                    color="green"
                    // onChange={(e) => setText(e.target.value)}
                    containerProps={{
                        className: "min-h-[100px] flex-grow backdrop-blur-sm",
                    }}
                    className="resize-none overflow-y-auto scrollbar-thin scrollbar-thumb-orange-200 scrollbar-track-transparent"
                />


                <div className="flex items-center justify-between">
                    <span className="text-md text-gray-500">Upstream LLM Model: None</span>

                    <Button
                        // onClick={handleSend}
                        className="text-white px-4 py-2 rounded-md transition bg-purple-50"
                    >
                        <PaperAirplaneIcon className="h-5 w-5 text-purple-700" />
                    </Button>
                </div>
            </div>

        </div>
    );
}

function RightSection({ inference, setInference }) {
    const [exportOpen, setExportOpen] = useState(false);
    const tabsData = [
        {
            label: "Output",
            value: "output",
            icon: CubeTransparentIcon,
            desc: <ModelViewer onExport={async () => {
                try {
                    const res = await fetch('/TIG_result.txt');
                    if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
                    const blob = await res.blob();
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = 'TIG_result.txt';
                    document.body.appendChild(a);
                    a.click();
                    a.remove();
                    URL.revokeObjectURL(url);
                } catch (err) {
                    console.error('Download failed:', err);
                }
                setExportOpen(true);
            }} inference={inference} />,
        },
        {
            label: "Validate",
            value: "validate",
            icon: BeakerIcon,
            desc: <ValidateSection onExport={() => setExportOpen(true)} />,
        },
        {
            label: "LLM Chat",
            value: "llm-chat",
            icon: LanguageIcon,
            desc: <LLMChatSection />, // optional: also allow export from here
        },
    ];

    return (
        <>
                <Tabs value="output" className="flex flex-col h-full">
                    <TabsHeader className="bg-gray-100">
                        {tabsData.map(({ label, value, icon }) => (
                            <Tab key={value} value={value}>
                                <div className="flex items-center gap-2">
                                    {icon && React.createElement(icon, { className: "w-5 h-5" })}
                                    {label}
                                </div>
                            </Tab>
                        ))}
                    </TabsHeader>

                    <TabsBody className="flex-1 overflow-hidden px-4 pt-4">
                        {tabsData.map(({ value, desc }) => (
                            <TabPanel key={value} value={value} className="flex flex-col h-full">
                                {desc}
                            </TabPanel>
                        ))}
                    </TabsBody>
                </Tabs>

            {/* Export Dialog */}
            {/* <ExportDialog open={exportOpen} setOpen={setExportOpen} /> */}
        </>
    );
}

function ModelDropdown({ selectedModel, onChange }) {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const models = ["TIG"];

    const handleSelect = (model) => {
        onChange?.(model);
        setIsMenuOpen(false);
    };

    return (
        <Menu open={isMenuOpen} handler={setIsMenuOpen} allowHover>
            <MenuHandler>
                <div className="inline-flex gap-2 px-4 py-2 rounded-full cursor-pointer border border-gray-300 hover:bg-gray-100 transition">
                    <VariableIcon className="h-5 w-5 text-blue-gray-500" />
                    <Typography variant="small" className="font-medium text-blue-gray-900">
                        {selectedModel || "Model"}
                    </Typography>
                    <ChevronDownIcon
                        strokeWidth={2}
                        className={`h-4 w-4 transition-transform ${isMenuOpen ? "rotate-180" : ""}`}
                    />
                </div>
            </MenuHandler>

            <MenuList className="w-44">
                {models.map((model) => (
                    <MenuItem
                        key={model}
                        onClick={() => handleSelect(model)}
                        className="hover:bg-blue-50"
                    >
                        {model}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
}

function ModelViewer({ onExport, inference }) {
    return (
        <div className="flex flex-col h-full w-full">
            <div className="flex-1 min-h-0 w-full rounded-xl overflow-hidden border border-transparent backdrop-blur-sm">
                
            </div>
            <div className="mt-auto flex justify-center">
                <Button
                    onClick={onExport}
                    className="bg-pink-400 text-white px-4 py-2 rounded-md hover:bg-pink-600 flex items-center gap-2"
                >
                    <ArrowDownOnSquareStackIcon className="w-5 h-5" />
                    Export
                </Button>
            </div>
        </div>
    );
}

function ValidateSection({ onExport }) {
    const [isLoading, setIsLoading] = React.useState(false);
    const [imageUrl, setImageUrl] = React.useState(null);
    const [logs, setLogs] = React.useState([]);

    const handleSimulate = async () => {
        setIsLoading(true);
        setImageUrl(null);
        setLogs([]);

        try {
            const res = await fetch("/api/simulate");
            const blob = await res.blob();
            const url = URL.createObjectURL(blob);
            setImageUrl(url);

            const logsRes = await fetch("/api/simulate/logs");
            const data = await logsRes.json();
            setLogs(data.logs || []);
        } catch (err) {
            console.error("Simulation failed:", err);
            setLogs(["Simulation failed. Check console for details."]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col h-full w-full px-2 py-4 gap-4">
            <div className="flex justify-center">
                <Button
                    onClick={handleSimulate}
                    className="bg-teal-500 text-white px-6 py-2 rounded-md hover:bg-teal-600"
                >
                    Simulate
                </Button>
            </div>

            <div className="w-full max-w-4xl mx-auto aspect-video rounded-lg border border-transparent flex items-center justify-center backdrop-blur-sm">
                {isLoading ? (
                    <Spinner className="h-16 w-16" color="orange" />
                ) : imageUrl ? (
                    <img
                        src={imageUrl}
                        alt="Simulation Output"
                        className="object-contain w-full h-full rounded-md"
                    />
                ) : (
                    <Typography variant="small" color="gray">
                        Simulated response will appear here
                    </Typography>
                )}
            </div>

            <div className="flex-1 min-h-0 w-full max-w-4xl mx-auto border border-gray-200 rounded-md overflow-y-auto p-4 backdrop-blur-sm">
                {logs.length > 0 ? (
                    logs.map((line, idx) => (
                        <Typography key={idx} variant="small" className="text-gray-800 whitespace-pre-wrap">
                            {line}
                        </Typography>
                    ))
                ) : (
                    <Typography variant="medium" color="gray">
                        Simulation Logs
                    </Typography>
                )}
            </div>

            <div className="mt-auto p-4 flex justify-center">
                <Button
                    onClick={onExport}
                    className="bg-pink-400 text-white px-4 py-2 rounded-md hover:bg-pink-600 flex items-center gap-2"
                >
                    <ArrowDownOnSquareStackIcon className="w-5 h-5" />
                    Export
                </Button>
            </div>
        </div>
    );
}


function LLMChatSection() {
    const [isLoading, setIsLoading] = React.useState(false);
    const [responseText, setResponseText] = React.useState(null);

    const handleSend = async () => {
        setIsLoading(true);
        setResponseText(null);

        try {
            const res = await fetch("/api/llm-chat");
            const data = await res.text(); // or .json() depending on backend
            setResponseText(data);
        } catch (err) {
            console.error("Failed to fetch LLM response:", err);
            setResponseText("Error: Failed to get response from backend.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col h-full w-full overflow-hidden">
            <div className="flex-1 min-h-0 w-full rounded-md overflow-y-auto p-6">
                {isLoading ? (
                    <div className="flex justify-center">
                        <Skeleton />
                    </div>
                ) : responseText ? (
                    <Typography variant="paragraph" className="whitespace-pre-wrap text-gray-800">
                        {responseText}
                    </Typography>
                ) : (
                    <>

                        <Typography variant="small" color="gray" className="text-center mb-8">
                            LLM output will appear here
                        </Typography>
                        <div className="flex justify-center">
                            <Skeleton />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

