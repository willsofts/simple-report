import jsPDF from "jspdf";

const doc = new jsPDF();
doc.text("Hello World",1,20);
doc.save("./pdf/a4.pdf");
