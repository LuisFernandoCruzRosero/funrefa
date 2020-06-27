import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fisica',
  templateUrl: './fisica.component.html',
  styleUrls: ['./fisica.component.css']
})
export class FisicaComponent implements OnInit {
  
  titulo:String = "TERAPIA FÍSICA";

  logo:String = "../../assets/imagenes/logo.png";

  imagen:String = "../../assets/imagenes/fisioterapia.jpg";

  parrafo:String = "es la rama de la medicina que realiza tratamiento a las afecciones físicas de nuestro cuerpo" + 
  " a través del ejercicio o diversas prácticas como la aplicación de frío, calor, agua, electricidad y masajes en" + 
  " esas áreas afectadas.";

  parrafo1:String = "Por otro lado, la fisioterapia también se encargará de diagnosticar aquellas enfermedades que " + 
  "afectan la capacidad de moverse o los músculos. Para ello, utiliza pruebas eléctricas y manuales que proporcionan " + 
  "una visión general y precisa de la fuerza muscular, el movimiento de las articulaciones y el desarrollo funcional, " + 
  "entre otros problemas.";
 
  parrafo2:String = "Esta forma de tratamiento es útil para pacientes con enfermedades ortopédicas, neurológicas," + 
  " degenerativas, en el pre y postoperatorio de enfermedades, para aquellos que sufren parálisis cerebral, lesiones" + 
  " de nervios periféricos o de la médula espinal, enfermedades cerebrales, amputaciones, accidentes, lesiones, " + 
  "deportivas o musculares, esquelético, como una rotura, un esguince o una contractura.";
 
  constructor() { }

  ngOnInit() {
  }

}
