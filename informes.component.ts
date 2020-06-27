import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informes',
  templateUrl: './informes.component.html',
  styleUrls: ['./informes.component.css']
})
export class InformesComponent implements OnInit {

  titulo:String = "INFORMACIÓ LEGAL DE FUNREFA";

  logo:String = "../../assets/imagenes/logo.png";

  informe:String[]=[
  "../../assets/imagenes/doc1.jpg", "../../assets/imagenes/doc2.jpg", "../../assets/imagenes/doc3.jpg", "../../assets/imagenes/doc4.jpg",
  "../../assets/imagenes/doc5.jpg", "../../assets/imagenes/doc6.jpg", "../../assets/imagenes/doc7.jpg",
];

  constructor() { }

  ngOnInit() {
  }

}
