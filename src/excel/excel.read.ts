import ExcelJS from "exceljs";

async function readXLSX(file: string) {
    try {
        const workbook = new ExcelJS.Workbook();
        let wb = await workbook.xlsx.readFile(file);
        const worksheet = wb.getWorksheet(1);
        if(worksheet) {
            worksheet.eachRow({ includeEmpty: true }, (row: ExcelJS.Row, rowNumber) => {
                if(rowNumber>=2) {
                    let no = row.getCell(1).value;
                    let product_name = row.getCell(2).value;
                    let price = row.getCell(3).value;
                    console.log("no=",no,"product_name",product_name,"price",price);
                }
            });
        }
    } catch (err) {
      console.log(err);
    }
}

let file = "./excel/excel.gen.xlsx";
readXLSX(file);

