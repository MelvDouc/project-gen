#!/usr/bin/env node
import ArgvParser from "./ArgvParser.js";
import ProjectGenerator from "./ProjectGenerator.js";
function main() {
    const argvParser = new ArgvParser(process.argv, "1.1.0");
    if (argvParser.hasFlag("h", "help"))
        return argvParser.printHelp();
    if (argvParser.hasFlag("v", "version"))
        return argvParser.printVersion();
    const projectName = argvParser.getProjectName();
    if (!projectName)
        return argvParser.printNoProjectName();
    const hasCSSBoilerplateFlag = argvParser.hasFlag("cb", "css-boilerplate");
    const projectGenerator = new ProjectGenerator(projectName, hasCSSBoilerplateFlag);
    projectGenerator.createContents();
    argvParser.printSuccess(projectName);
}
main();
