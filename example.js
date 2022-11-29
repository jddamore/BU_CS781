// This assigns a module for accessing the filesystem
const fs= require('fs');
// This reads all filenames in a directory and returns an array of them 
let files = fs.readdirSync('./samples');

// This is a simple for loop to iterate over array of filenames 
for (let i = 0; i < files.length; i++) {
  // This reads the file from the filepath as an utf-8 string
  let file = fs.readFileSync('./samples/' + files[i], 'utf-8');
  // This turns the string into a JSON object on which can be operated
  let data = JSON.parse(file);
  for (let j = 0; j < data.entry.length; j++) {
    // this if statement only looks at "MedicationRequest" resources. See https://hl7.org/fhir/medicationrequest.html
    if (data.entry[j].resource.resourceType === "MedicationRequest") {
      // console.log displays information to the terminal (it's like print in python) 
      console.log(data.entry[0].resource.name[0].family + '|' + data.entry[j].resource.medicationCodeableConcept.coding[0].display);
    }
  }
}
