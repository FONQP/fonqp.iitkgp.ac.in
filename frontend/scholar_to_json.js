import fs from "fs";
import Papa from "papaparse";

const csv = fs.readFileSync("citations.csv", "utf8");

const json = Papa.parse(csv, {
    header: true,
    skipEmptyLines: true,
}).data;

fs.writeFileSync(
    "./data/publications.json",
    JSON.stringify(json, null, 2)
);
