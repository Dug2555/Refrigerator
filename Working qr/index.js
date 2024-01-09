//const fs = require("fs");

//const example = {
//    id: 2,
//    name: "addtest",
//    date: "5-2022"
//}

//const data = JSON.stringify(example);

//fs.writeFile("data.json", data, (error) => {
//    // throwing the error
 //   // in case of a writing problem
 //   if (error) {
 //     // logging the error
 //     console.error(error);
  
 //     throw error;
 //   }
//});

//added from G4G
function domReady(fn) { 
    if ( 
        document.readyState === "complete" || 
        document.readyState === "interactive"
    ) { 
        setTimeout(fn, 1000); 
    } else { 
        document.addEventListener("DOMContentLoaded", fn); 
    } 
} 
  
domReady(function () { 
  
    // If found you qr code 
    function onScanSuccess(decodeText, decodeResult) { 
        alert("You Qr is : " + decodeText, decodeResult); 
    } 
  
    let htmlscanner = new Html5QrcodeScanner( 
        "my-qr-reader", 
        { fps: 10, qrbos: 250 } 
    ); 
    htmlscanner.render(onScanSuccess); 
});

import filedata from './data.json' assert { type: 'json' };
console.log(filedata);
