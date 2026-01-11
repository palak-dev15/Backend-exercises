// var generateName = require("sillyname");

// import generateName from sillyName;
// var sillyName = generateName();

// console.log("My name is " + sillyName + ".");

// import { randomSuperhero } from 'superheroes';

// const name = randomSuperhero();
// console.log (name);

import qr from "qr-image";
import fs from "fs" ;
import inquirer from 'inquirer';

inquirer
  .prompt([{
   message: "Type in your URL",
   name : "URl",
  },
  ])
  .then((answers) => {
    const url = answers.URl;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs).createWriteStream('qr-img.png');
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });