"use strict";

const csv = require("fast-csv");
const fs = require("fs");

const COLUMN_NAME_ALIAS = "TOKEN ALIAS";

function getAliasesFromCSV(csvPath, callback) {
    const stream = fs.createReadStream(csvPath);
    const options = {
        // headers: ["variantId", "alias", "token"]
        headers: true
    }
    const aliases = [];
    const csvStream = csv
        .parse(options)
        .on("data", row => aliases.push(row[COLUMN_NAME_ALIAS]))
        .on("end", () => callback(aliases));

    stream.pipe(csvStream);
}

module.exports = {
    getAliasesFromCSV: getAliasesFromCSV
}
