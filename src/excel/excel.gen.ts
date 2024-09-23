import fs from "fs";
import ExcelJS from "exceljs";

let buffer = fs.readFileSync("./images/logo.jpg", {flag:'r'});
const base64Img = buffer.toString("base64");

function generateXLSX(data: Array<any>) {
    try {
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet("Simple Data", {
        pageSetup: { paperSize: ExcelJS.PaperSize.A4, orientation: "landscape" },
      });
  
      // Initialize the row index
      let rowIndex = 2;
  
      let row = worksheet.getRow(rowIndex);
      row.values = ["NO.", "Product", "Price"];
      row.font = { bold: true };
  
      const columnWidths = [10, 20, 20];
      
      row.eachCell((cell: ExcelJS.Cell, colNumber) => {
          const columnIndex = colNumber - 1;
          const columnWidth = columnWidths[columnIndex];
          worksheet.getColumn(colNumber).width = columnWidth;
        });
  
        // Loop over the grouped data
        data.forEach((data: any, index: number) => {
          const row = worksheet.getRow(rowIndex + index + 1);
          row.getCell("A").value = data.s_no;
          row.getCell("B").value = data.product_name;
          row.getCell("C").value = data.price;
         
          row.getCell("B").alignment = { wrapText: true };
          row.getCell("C").alignment = { horizontal: "right" };
        });
        // Increment the row index
        rowIndex += data.length;
  
      // Merge cells for the logo
      worksheet.mergeCells(
        `A1:${String.fromCharCode(65 + worksheet.columns.length - 1)}1`
      );
  
      const image = workbook.addImage({
        base64: base64Img, //replace it your image (base 64 in this case)
        extension: "png",
      });

      //ExcelJS.ImagePosition
      worksheet.addImage(image, {
        tl: { col: 0, row: 0 },
        ext: { width: 150, height: 30 },
      });
  
      worksheet.getRow(1).height = 30;
  
      
      // Define the border style
      const borderStyle : ExcelJS.Border = {
        style: "thin", // You can use 'thin', 'medium', 'thick', or other valid styles
        color: { argb: "00000000" },
      };
  
      // Loop through all cells and apply the border style
      worksheet.eachRow((row: ExcelJS.Row, rowNumber: number) => {
        row.eachCell({ includeEmpty: true }, (cell: ExcelJS.Cell, colNumber: number) => {
          cell.border = {
            top: borderStyle,
            bottom: borderStyle,
          };
        });
      });
  
      // Generate the XLS file
      //return workbook.xlsx.writeBuffer(); //return buffer if need to send via response
      workbook.xlsx.writeFile("./excel/excel.gen.xlsx");
    } catch (err) {
      console.log(err);
    }
  }

let datas = [
    { s_no: '1', product_name: 'Multimedia Speaker with Remote Control', price: '75000' },
    { s_no: '4', product_name: 'สวัสดีปีใหม่', price: '34000' },
    { s_no: '5', product_name: 'ทดสอบภาษาไทย', price: '35000' },
];

generateXLSX(datas);

