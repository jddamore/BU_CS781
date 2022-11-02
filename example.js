const fs= require('fs');
let files = fs.readdirSync('./samples');

for (let i = 0; i < files.length; i++) {
  let file = fs.readFileSync('./samples/' + files[i], 'utf-8');
  let data = JSON.parse(file);
  for (let j = 0; j < data.entry.length; j++) {
    if (data.entry[j].resource.resourceType === "MedicationRequest") {
      console.log(data.entry[0].resource.name[0].family + '|' + data.entry[j].resource.medicationCodeableConcept.coding[0].display);
    }
  }
}