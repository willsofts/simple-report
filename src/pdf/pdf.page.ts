import jsPDF from "jspdf";

let doc = new jsPDF("p","pt","a4"); //p=portrait
doc.text("Hello World",1,20);
doc.save("./pdf/a4_portrait.pdf");

doc = new jsPDF("l","pt","a4"); //l=landscape
doc.text("Hello World",1,20);
doc.save("./pdf/a4_landscape.pdf");
