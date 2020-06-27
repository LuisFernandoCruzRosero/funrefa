import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-psiquiatria',
  templateUrl: './psiquiatria.component.html',
  styleUrls: ['./psiquiatria.component.css']
})
export class PsiquiatriaComponent implements OnInit {
  
  titulo:String = "PSIQUIATRÍA";

  logo:String = "../../assets/imagenes/logo.png";

  imagen:String = "../../assets/imagenes/psiquiatria.jpg";

  parrafo:String = "es la especialidad médica dedicada al estudio de los trastornos mentales de origen genético " + 
  "o neurológico con el objetivo de prevenir, evaluar, diagnosticar, tratar y rehabilitar a las personas con " + 
  "trastornos mentales y asegurar la autonomía y la adaptación del individuo a las condiciones de su existencia.";

  parrafo1:String = "También en un ámbito general, se dedica al estudio del encéfalo y lo que está funcionando " + 
  "mal dentro de él, no tan solo enfermedades mentales.";

  constructor() { }

  ngOnInit() {
  }

}
