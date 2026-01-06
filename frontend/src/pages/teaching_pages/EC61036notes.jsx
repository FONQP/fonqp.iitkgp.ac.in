import React from "react";
import { Typography, Button, IconButton } from "@material-tailwind/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { FaRegFilePdf } from 'react-icons/fa6';
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import "katex/dist/katex.min.css";
import { NOTES_DATA } from "../../data/teaching_notes/EC61036";

export default function EC61036notes() {
    const [active, setActive] = React.useState(1);
    const totalPages = NOTES_DATA.length;

    const next = () => {
        if (active === totalPages) return;
        setActive(active + 1);
        window.scrollTo({ top: document.getElementById("notes-container").offsetTop - 100, behavior: "smooth" });
    };

    const prev = () => {
        if (active === 1) return;
        setActive(active - 1);
        window.scrollTo({ top: document.getElementById("notes-container").offsetTop - 100, behavior: "smooth" });
    };

    const getItemProps = (index) => ({
        variant: active === index ? "filled" : "text",
        color: "gray",
        onClick: () => setActive(index),
    });

    return (
        <div id="notes-container" className="w-full animate-fade-in-up">
            <Typography variant="h4" className="text-gray-700 leading-relaxed pb-4 text-center">
                Lecture Scribes (Download as <FaRegFilePdf className="inline mb-1 ml-1" />):
            </Typography>
            <ReactMarkdown
                remarkPlugins={[remarkMath]}
                rehypePlugins={[rehypeKatex]}
                components={{
                    h1: ({ node, ...props }) => <Typography variant="h3" color="blue-gray" className="mb-4" {...props} />,
                    p: ({ node, ...props }) => <Typography className="mb-4 text-gray-800 font-normal text-lg" {...props} />,
                }}
            >
                {NOTES_DATA[active - 1]}
            </ReactMarkdown>

            <div className="flex items-center justify-center gap-4 mb-10">
                <Button
                    variant="text"
                    className="flex items-center gap-2"
                    onClick={prev}
                    disabled={active === 1}
                >
                    <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
                </Button>

                <div className="flex items-center gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <IconButton key={page} {...getItemProps(page)}>
                            {page}
                        </IconButton>
                    ))}
                </div>

                <Button
                    variant="text"
                    className="flex items-center gap-2"
                    onClick={next}
                    disabled={active === totalPages}
                >
                    Next <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
                </Button>
            </div>
        </div>
    );
}