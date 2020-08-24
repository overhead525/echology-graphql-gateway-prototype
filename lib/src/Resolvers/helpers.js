"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
exports.mockLeadsResponse = function (filename) {
    // This function retrieves the JSON file being requested and converts it to a javascript object
    var jsonURL = path.join(process.cwd() + ("" + filename));
    var rawJSONData = fs.readFileSync(jsonURL, 'utf-8');
    var leadData = JSON.parse(rawJSONData);
    return leadData;
};
//# sourceMappingURL=helpers.js.map