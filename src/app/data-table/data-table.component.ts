import { Component,  } from '@angular/core';

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent  {
  constructor() { }
  headers=["ID","Name","Age","Gender","Country"];
  rows=[
    { 
      "ID":"1",
      "Name":"Rahul Phin",
      "Age":"21",
      "Gender":"Male",
      "Country":"India",
    },
    { 
      "ID":"2",
      "Name":"Lee So Yin",
      "Age":"32",
      "Gender":"Male",
      "Country":"ThaiLand",
    },  { 
      "ID":"3",
      "Name":"Emi Futaka",
      "Age":"12",
      "Gender":"FeMale",
      "Country":"China",
    },
    { 
      "ID":"4",
      "Name":"RJames But",
      "Age":"18",
      "Gender":"Male",
      "Country":"English",
    },
    { 
      "ID":"5",
      "Name":"Josephine Darakjy",
      "Age":"28",
      "Gender":"FeMale",
      "Country":"Indonesia",
    },
    { 
      "ID":"6",
      "Name":"Oden Ema",
      "Age":"42",
      "Gender":"Male",
      "Country":"Janpa",
    },
    { 
      "ID":"7",
      "Name":"Lux Damaxia",
      "Age":"22",
      "Gender":"FeMale",
      "Country":"Korea",
    },
    ]

}
