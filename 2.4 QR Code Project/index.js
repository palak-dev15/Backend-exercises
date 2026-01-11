/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import qr from "qr-image";
import fs from "fs" ;
import inquirer from 'inquirer';

inquirer
  .prompt([
  {
   message: "Type in your URL",
   name : "URl",
  },
  ])
  .then((answers) => {
    const url = answers.URl;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qrme-img.png'));

  fs.writeFile("URL.txt", url, (err)=> {
 if(err) throw err;
 console.log("Your file has been saved");
  }) 
})
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
  
