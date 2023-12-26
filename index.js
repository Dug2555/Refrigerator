const fs = require("fs");

const example = {
    id: 2,
    name: "addtest",
    date: "5-2022"
}

const data = JSON.stringify(example);

fs.writeFile("data.json", data, (error) => {
    // throwing the error
    // in case of a writing problem
    if (error) {
      // logging the error
      console.error(error);
  
      throw error;
    }
});

import filedata from './data.json' assert { type: 'json' };
console.log(filedata);
