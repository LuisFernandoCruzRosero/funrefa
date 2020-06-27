import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vision',
  templateUrl: './vision.component.html',
  styleUrls: ['./vision.component.css']
})
export class VisionComponent implements OnInit {
  
  titulo:String = "VISION";

  logo:String = "../../assets/imagenes/logo.png";

  imagen:String = "../../assets/imagenes/vision.jpg";
  
  parrafo1:String = "La visión de Funrefa,  es ser reconocidos  para el año 2013 a nivel municipal y para el  " + 
  "año 2015 a nivel  departamental y nacional  como una fundación comprometida humanamente con la población " + 
  "prestando servicios  integrales a esta población y a la comunidad en general contando con el apoyo  de entidades" + 
  " gubernamentales y no gubernamentales.";
  
  parrafo2:String = "Los valores están basados en  el Amor a Dios, la Presencia en la comunidad, la Disciplina  y" + 
  " el Respeto por las personas";

  constructor() { }

  ngOnInit() {
  }

}
