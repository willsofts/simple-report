import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const doc = new jsPDF("p","pt","a4");
autoTable(doc, {
    headStyles: { halign: 'center' },
    columnStyles: { s_no: { halign: 'center'}, price: { halign: 'right' } },
    body: [
         { s_no: '1', product_name: 'GIZMORE Multimedia Speaker with Remote Control, Black', price: '75000' },
         { s_no: '2', product_name: 'Realme', price: '25000' },
         { s_no: '3', product_name: 'Oneplus', price: '30000' },
    ],
    columns: [
         { header: 'SL.No', dataKey: 's_no' },
         { header: 'Product Name', dataKey: 'product_name' },
         { header: 'Price', dataKey: 'price' },
    ],
    theme: "grid",
 })
doc.save("./pdf/auto.table.theme.pdf");
