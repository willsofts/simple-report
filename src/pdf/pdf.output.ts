import jsPDF from "jspdf";
import fs from "fs";

const doc = new jsPDF();
doc.text("Hello World",1,20);
let buffer = doc.output("arraybuffer");
fs.writeFileSync("./pdf/hello.pdf",Buffer.from(buffer));

/*
let blob = doc.output("blob");
const file = new File([blob],"./pdf/hello.pdf",{
    type: blob.type,
});
<a href="+URL.createObjectURL(file)+" download=" + file.name 
*/
/*
const blob = new Blob( [ buffer ], { type: 'application/pdf' } );	
var link = document.createElement("a");
link.href = URL.createObjectURL(blob);
link.download = 'hello.pdf';
link.click();

link.href = doc.output("bloburl");
*/
