import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  titulo:String = "FUNREFA";

  logo:String = "../../assets/imagenes/logo.png";

  imagen:String = "../../assets/imagenes/inicio.jpg";
  
  parrafo:String = "Es para nosotros un enorme placer presentar a usted la Fundación de Restauración y " + 
  "Ayuda Familiar FUNREFA, la cual esta trabajado para los niños, niñas, jóvenes y adultos  en condición de discapacidad.";
  
  parrafo1:String = "El origen de la Fundación nace con  un marcado interés: llegar a los hogares de las" + 
  " familias que se encuentran en condición de Vulnerabilidad, brindándoles ayudas  que permitan mejorar su " + 
  "calidad de vida y un mejor desarrollo integral y al mismo tiempo establecer en el municipio  un ente que vele " + 
  "por esta población teniendo como base la Familia.";

  constructor() { }

  ngOnInit() {
  }

}
