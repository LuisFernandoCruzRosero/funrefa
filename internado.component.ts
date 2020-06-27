import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-internado',
  templateUrl: './internado.component.html',
  styleUrls: ['./internado.component.css']
})
export class InternadoComponent implements OnInit {

  titulo:String = "INTERNADO";
  
  logo:String = "../../assets/imagenes/logo.png";

  imagen:String = "../../assets/imagenes/internado.jpg";

  parrafo:String = "Estimadas familias A partir del año 2019 la fundación ha establecido la modalidad en su " + 
  "servicio que es DIURNA. Estas modalidad esta establecida de la siguiente  manera";

  parrafo1:String = "INCLUYE: transporte, desayuno, almuerzo, refrigerio, pedagogía (clases de música, teatro," + 
  " manualidad y actividades lúdicas y deportivas),  psicología, fisioterapia";

  constructor() { }

  ngOnInit() {
  }

}
