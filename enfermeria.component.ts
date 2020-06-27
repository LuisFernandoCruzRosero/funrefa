import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enfermeria',
  templateUrl: './enfermeria.component.html',
  styleUrls: ['./enfermeria.component.css']
})
export class EnfermeriaComponent implements OnInit {

  titulo:String = "ENFERMERÍA";

  logo:String = "../../assets/imagenes/logo.png";

  imagen:String = "../../assets/imagenes/enfermeria.jpg";

  parrafo:String = "es la ciencia que se dedica al cuidado y atención de enfermos y heridos, así como a otras tareas" + 
  " asistencia sanitarias, siguiendo pautas clínicas.";

  parrafo1:String = " La enfermería forma parte de las conocidas como ciencias de la salud. La enfermería abarca " + 
  "la atención autónoma y en colaboración dispensada a personas de todas las edades, familias, grupos y comunidades," + 
  " enfermos o no, y en todas circunstancias. Comprende la promoción de la salud, la prevención de enfermedades y la " + 
  "atención dispensada a enfermos, discapacitados y personas en situación terminal.";
 
  constructor() { }

  ngOnInit() {
  }

}
