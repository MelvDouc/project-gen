#!/usr/bin/env node
import { program } from "commander";
import ProjectGenerator from "./ProjectGenerator.js";
program
    .version("1.0.3")
    .description("Quickly set up a new index.html + style.css + main.js project.");
program
    .option("-n, --name <value>", "name of the new project folder", ProjectGenerator.sanitizeDirName, "new-project")
    .option("-cb, --css-boilerplate", "include CSS boilerplate", false)
    .parse();
const { name, cssBoilerplate } = program.opts();
const contentsMaker = new ProjectGenerator(name, cssBoilerplate);
contentsMaker.createContents();
