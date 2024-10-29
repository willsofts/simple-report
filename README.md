# Simple Report

Demostration of pdf and excel report file usage

## Installation

With npm installed (comes with [node](https://nodejs.org/en/)), run the following commands into a terminal in the root directory of this project:

```shell
npm install
npm run build
```

### PDF Report

This demo is using of [jspdf](https://www.npmjs.com/package/jspdf) (folder `pdf`).

- pdf.a4        - basic write pdf file
- pdf.output    - basic custom output 
- pdf.page      - custom page setting
- auto.table    - simple usage of auto table
- auto.table.color  - header table color
- auto.table.theme  - using provided theme
- table.thai    - custom thai font
- table.head.foot   - custom header and footer

In case of thai font in [jspdf](https://www.npmjs.com/package/jspdf) need font file in VFS format that need tool to convert font file from `convert/fontconverter.html` or [fontconvert](https://rawgit.com/MrRio/jsPDF/master/fontconverter/fontconverter.html)


### Excel Report

This demo is using of [exceljs](https://www.npmjs.com/package/exceljs) (folder `excel`).

- excel.gen     - basic xlsx generate
- excel.read    - basic xlsx reading
