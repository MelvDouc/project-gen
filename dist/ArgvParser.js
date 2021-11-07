import Colors from "./colors.js";
export default class ArgvParser {
    constructor(argv, version) {
        this.argv = argv;
        this.version = version;
    }
    get help() {
        return [
            "",
            "Quickly set up an index.html + style.css + main.js project.",
            "",
            "<name>                     Name of the project folder.",
            "-cb, --css-boilerplate     Include style reset boilerplate.",
            "-h,  --help                List of flags and description.",
            `-v,  --version             Current version (${this.version}).`
        ].join("\n");
    }
    printInColor(output, color) {
        console.log(color + output + Colors.Reset);
    }
    printHelp() {
        this.printInColor(this.help, Colors.FgYellow);
    }
    printVersion() {
        this.printInColor(this.version, Colors.FgGreen);
    }
    printNoProjectName() {
        const output = `Please give the project folder a name.`;
        this.printInColor(output, Colors.FgRed);
    }
    printSuccess(projectName) {
        const output = `\n${Colors.FgCyan + Colors.Bright}A new project folder with the name ${Colors.FgWhite + projectName} ${Colors.FgCyan}was created.${Colors.Reset}`;
        console.log(output);
    }
    hasFlag(short, long) {
        return this.argv.includes(`-${short}`)
            || this.argv.includes(`--${long}`);
    }
    getProjectName() {
        return this.argv.find(arg => {
            return /^\w+(\-\w+)*$/.test(arg);
        });
    }
}
