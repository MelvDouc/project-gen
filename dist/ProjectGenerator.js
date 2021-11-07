import { join as pathJoin, resolve as pathResolve } from "path";
import { mkdirSync, writeFileSync } from "fs";
import chalk from "chalk";
export default class ProjectGenerator {
    constructor(projectName, hasCSSboilterplate) {
        this.ROOT_PATH = pathResolve(".");
        this.projectName = projectName;
        this.hasCSSboilerplate = hasCSSboilterplate;
    }
    static sanitizeDirName(dirName) {
        const regex = /[<\>:"/\\\|\?\*]/g;
        return dirName.replace(regex, "-");
    }
    get HTML_contents() {
        return `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="./assets/css/style.css" />
  <script src="./assets/js/main.js" type="module"></script>
  <title>${this.projectName}</title>
</head>

<body>
</body>

</html>
`.trim();
    }
    get CSS_contents() {
        return `
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100vh;
}

body {
  display: flex;
  flex-flow: column nowrap;
}
    `.trim();
    }
    createSubdirectoryAndFile(dirName, fileName, contents = "") {
        const dirPath = pathJoin(this.ROOT_PATH, this.projectName, dirName);
        const filePath = pathJoin(dirPath, fileName);
        mkdirSync(dirPath, { recursive: true });
        writeFileSync(filePath, contents);
    }
    createContents() {
        const CSS_contents = this.hasCSSboilerplate ? this.CSS_contents : "";
        this.createSubdirectoryAndFile("", "index.html", this.HTML_contents);
        this.createSubdirectoryAndFile(pathJoin("assets", "css"), "style.css", CSS_contents);
        this.createSubdirectoryAndFile(pathJoin("assets", "js"), "main.js");
        console.log(`A new project folder with the name ${chalk.green(this.projectName)} was created.`);
    }
}
