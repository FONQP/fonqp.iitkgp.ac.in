import { useState } from "react";
import { Typography } from "@material-tailwind/react";
import {
    ChevronDownIcon,
    ChevronRightIcon,
} from "@heroicons/react/24/outline";

function TreeNode({ owner, repo, path = "", level = 0 }) {
    const [open, setOpen] = useState(false);
    const [children, setChildren] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchChildren = async () => {
        if (children || loading) return;

        setLoading(true);
        const res = await fetch(
            `https://api.github.com/repos/${owner}/${repo}/contents/${path}`
        );
        const data = await res.json();
        setChildren(data);
        setLoading(false);
    };

    const toggle = () => {
        if (!open) fetchChildren();
        setOpen(!open);
    };

    return (
        <div>
            <div
                className="flex items-center justify-between py-2 px-2 rounded hover:bg-gray-50 cursor-pointer"
                style={{ paddingLeft: `${level * 1.25}rem` }}
                onClick={toggle}
            >
                <div className="flex items-center gap-2">
                    {open ? (
                        <ChevronDownIcon className="w-4 h-4" color="gray" />
                    ) : (
                        <ChevronRightIcon className="w-4 h-4" color="gray" />
                    )}

                    <Typography className="font-medium text-gray-800">
                        📁 {path || `${owner}/${repo}`}
                    </Typography>
                </div>
            </div>

            {open && (
                <div>
                    {loading && (
                        <Typography variant="small" className="ml-6">
                            Loading...
                        </Typography>
                    )}

                    {children &&
                        children.map((item) =>
                            item.type === "dir" ? (
                                <TreeNode
                                    key={item.path}
                                    owner={owner}
                                    repo={repo}
                                    path={item.path}
                                    level={level + 1}
                                />
                            ) : (
                                <div
                                    key={item.path}
                                    className="flex justify-between py-2 px-2"
                                    style={{ paddingLeft: `${(level + 1) * 1.25}rem` }}
                                >
                                    <Typography className="text-gray-800">📄 {item.name}</Typography>
                                    <Typography variant="small" color="gray">
                                        {item.size} bytes
                                    </Typography>
                                </div>
                            )
                        )}
                </div>
            )}
        </div>
    );
}
export default function Datasets() {
    return (
        <div className="h-[70vh] flex flex-col overflow-hidden">
            <Typography
                variant="h2"
                className="text-center text-blue-gray-800 mb-10 font-semibold"
            >
                Access our Simulated Datasets
            </Typography>

            <div className="flex-grow min-h-0 grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="md:col-span-2 px-6 h-full min-h-0">
                    <div className="h-full overflow-y-auto border p-4 rounded scrollbar scrollbar-thumb-gray-400 scrollbar-track-gray-100">
                        <TreeNode owner="fonqp" repo="datasets" />
                    </div>
                </div>

                <div className="md:col-span-3 px-6" />
            </div>
        </div>


    );
}
