import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";


const doc = new jsPDF("p","pt","a4");
doc.addFileToVFS('tahoma-normal.ttf', font);
doc.addFont('tahoma-normal.ttf', 'tahoma', 'normal');
doc.setFont('tahoma');
autoTable(doc, {
    headStyles: { halign: 'center' },
    columnStyles: { s_no: { halign: 'center'}, price: { halign: 'right' } },
    body: [
         { s_no: '1', product_name: 'GIZMORE Multimedia Speaker with Remote Control, Black', price: '75000' },
         { s_no: '4', product_name: 'สวัสดีปีใหม่', price: '34000' },
         { s_no: '5', product_name: 'ทดสอบภาษาไทย', price: '35000' },
         { s_no: '5', product_name: 'tahoma', price: '35000' },
    ],
    columns: [
         { header: 'SL.No', dataKey: 's_no' },
         { header: 'Product Name', dataKey: 'product_name' },
         { header: 'Price', dataKey: 'price' },
    ],
    theme: "grid",
    styles: { font: 'tahoma' },
 })
doc.save("./pdf/table.thai.tahoma.pdf");