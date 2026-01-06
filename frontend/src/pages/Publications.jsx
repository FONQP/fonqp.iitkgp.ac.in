import React from "react";
import { Link } from "react-router-dom";
import {
    Typography,
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
    Button,
    IconButton,
} from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

import { patents } from "../data/Publications";

const PAGE_SIZE = 10;

export default function Publications() {
    const [activeTab, setActiveTab] = React.useState("patents");

    // Journals lazy state
    const [journals, setJournals] = React.useState([]);
    const [loadingJournals, setLoadingJournals] = React.useState(false);

    // Pagination
    const [page, setPage] = React.useState(1);

    const totalPages = Math.ceil(journals.length / PAGE_SIZE);

    const visibleJournals = journals.slice(
        (page - 1) * PAGE_SIZE,
        page * PAGE_SIZE
    );

    // Lazy load journals ONLY when tab opens
    React.useEffect(() => {
        if (activeTab === "journals" && journals.length === 0) {
            setLoadingJournals(true);
            fetch("/publications.json")
                .then((res) => res.json())
                .then((data) => {
                    setJournals(data);
                    setLoadingJournals(false);
                });
        }
    }, [activeTab, journals.length]);

    const next = () => {
        if (page < totalPages) setPage((p) => p + 1);
    };

    const prev = () => {
        if (page > 1) setPage((p) => p - 1);
    };

    return (
        <>
            <Typography variant="h2" className="text-center text-blue-gray-800">
                Publications
            </Typography>

            <div className="max-w-7xl mx-auto p-6 mt-12">
                <Tabs value={activeTab}>
                    <TabsHeader
                        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0 mb-6"
                        indicatorProps={{
                            className:
                                "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
                        }}
                    >
                        <Tab value="patents" onClick={() => setActiveTab("patents")}>
                            Patents
                        </Tab>
                        <Tab value="journals" onClick={() => setActiveTab("journals")}>
                            Journal Articles
                        </Tab>
                    </TabsHeader>

                    <TabsBody>
                        {/* ---------------- PATENTS ---------------- */}
                        <TabPanel value="patents" className="p-0">
                            <div className="divide-y divide-gray-300">
                                {patents.map((item) => (
                                    <div
                                        key={item.no}
                                        className="flex flex-col md:flex-row md:items-center justify-between py-4"
                                    >
                                        <div className="md:w-3/4 overflow-hidden">
                                            <Typography
                                                variant="h5"
                                                className="font-semibold mb-1 truncate"
                                                title={item.title}
                                            >
                                                {item.title}
                                            </Typography>
                                            <Typography
                                                className="text-gray-700 text-sm truncate"
                                                title={item.inventors}
                                            >
                                                {item.inventors}
                                            </Typography>
                                        </div>
                                        <div className="md:w-1/4 text-right">
                                            <Typography className="text-gray-600 text-sm font-medium">
                                                {item.no}
                                            </Typography>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </TabPanel>

                        {/* ---------------- JOURNALS (LAZY + PAGINATED) ---------------- */}
                        <TabPanel value="journals" className="p-0">
                            {loadingJournals ? (
                                <Typography className="text-center py-8">
                                    Loading journal articles…
                                </Typography>
                            ) : (
                                <>
                                    <div className="divide-y divide-gray-300">
                                        {visibleJournals.map((item) => (
                                            <div
                                                key={item.id || item.Title}
                                                className="flex flex-col md:flex-row md:items-center justify-between py-4"
                                            >
                                                <div className="md:w-3/4 overflow-hidden">
                                                    <Link
                                                        to={item.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-inherit hover:underline"
                                                    >
                                                        <Typography
                                                            variant="h5"
                                                            className="font-semibold mb-1 truncate"
                                                            title={item.Title}
                                                        >
                                                            {item.Title}
                                                        </Typography>
                                                    </Link>
                                                    <Typography
                                                        className="text-gray-700 text-sm truncate"
                                                        title={item.Authors}
                                                    >
                                                        {item.Authors}
                                                    </Typography>
                                                </div>
                                                <div className="md:w-1/4 text-right">
                                                    <Typography className="text-gray-600 text-sm font-medium">
                                                        {item.Publication}
                                                    </Typography>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Pagination */}
                                    {totalPages > 1 && (
                                        <div className="flex justify-center mt-8 gap-4">
                                            <Button
                                                variant="text"
                                                onClick={prev}
                                                disabled={page === 1}
                                                className="flex items-center gap-2"
                                            >
                                                <ArrowLeftIcon className="h-4 w-4" />
                                                Previous
                                            </Button>

                                            <IconButton variant="filled" color="gray">
                                                {page}
                                            </IconButton>

                                            <Button
                                                variant="text"
                                                onClick={next}
                                                disabled={page === totalPages}
                                                className="flex items-center gap-2"
                                            >
                                                Next
                                                <ArrowRightIcon className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    )}
                                </>
                            )}
                        </TabPanel>
                    </TabsBody>
                </Tabs>
            </div>
        </>
    );
}
