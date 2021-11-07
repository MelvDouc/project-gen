# frontend-gen

## Description

Creates a new folder in the current directory containing:
- an `index.html` file with the usual boilerplate,
- an `assets` folder containing:
  - a `css/style.css` file with (optionally) a few style reset rules,
  - an empty `js/main.js` file.

## Installation

```
npm i -g frontend-gen
```

## Usage
- Create a new folder named "new-project":
```
project-gen
```
- Create a new folder named "minesweeper-tutorial":
```
project-gen --name minesweeper-tutorial
```
Or:
```
project-gen -n minesweeper-tutorial
```
- Add either of these flags to include some CSS boilerplate: `-cb`, `--css-boilerplate`.