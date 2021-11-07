#!/usr/bin/env node
import { program } from "commander";
import ProjectGenerator from "./ProjectGenerator.js";
program
    .version("1.0.0")
    .description("Quickly set up a new index.html + style.css + main.js project.");
program
    .option("-n, --name <value>", "name of the new project folder", ProjectGenerator.sanitizeDirName, "new-project")
    .parse();
const contentsMaker = new ProjectGenerator(program.opts().name);
contentsMaker.createContents();
