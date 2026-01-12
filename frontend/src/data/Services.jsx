export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

export const services = [
  {
    title: "MetaMizer",
    description:
      "AI based Metamaterial Designing",
    auth: "all",
    link: "/services/metamizer",
    logo: "/public/services/MetaMizer-logo.png",
    bkg: "/public/services/MetaMizer-bkg.png",
    action: "Design",
    color: "bg-purple-200 hover:bg-purple-300",
  },
  {
    title: "Random Number Generators",
    description:
      "Access our TRNGs",
    auth: "all",
    link: "/services/rng",
    logo: "/public/services/rng-logo.png",
    bkg: "/public/services/rng-bkg.png",
    action: "Acquire",
    color: "bg-gray-600 hover:bg-gray-700",
  },
  {
    title: "Datasets",
    description:
      "Optical Datasets",
    auth: "all",
    link: "/services/datasets",
    logo: "/public/services/datasets-logo.png",
    bkg: "/public/services/MetaMizer-bkg.png",
    action: "Explore",
    color: "bg-lime-500 hover:bg-lime-600",
  },
];