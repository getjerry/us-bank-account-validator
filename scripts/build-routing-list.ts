#!/usr/bin/env node

/* global __dirname */

import fs = require("fs");
import path = require("path");
import * as routingToBankname from "../src/__tests__/routing-to-bank-name.json";

const OUTPUT_PATH = path.join(__dirname, "..", "src", "routing-number-list.ts");

const routingNumbers = Object.keys(routingToBankname);

let result = ["export default ["];

result = result.concat(
  routingNumbers.map(function (number) {
    return `  "` + number + `",`;
  })
);

result = result.concat("];", "");

fs.writeFileSync(OUTPUT_PATH, result.join("\n"));
