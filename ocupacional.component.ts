import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ocupacional',
  templateUrl: './ocupacional.component.html',
  styleUrls: ['./ocupacional.component.css']
})
export class OcupacionalComponent implements OnInit {
  
  titulo:String = "TERAPIA OCUPACIONAL";

  logo:String = "../../assets/imagenes/logo.png";

  imagen:String = "../../assets/imagenes/terapiaOcupacional.jpg";
  
  parrafo:String = "La terapia ocupacional es una disciplina que tiene como objetivo la instrumentación de las ocupaciones " + 
  "para el tratamiento de la salud del hombre. El terapista ocupacional trabaja por el bienestar biopsicosocial, asistiendo" + 
  " al individuo para que alcance una actitud activa respecto a sus capacidades y pueda modificar sus habilidades disminuidas.";
  
  parrafo1:String = "En otras palabras, la terapia ocupacional busca que una persona con limitaciones físicas o psíquicas" + 
  " pueda tener una vida independiente y valore su propio potencial. La terapia ocupacional puede ayudar en el tratamiento" + 
  " de lesiones cerebrales y de la médula espinal, enfermedad de Parkinson, parálisis cerebral, debilidad general y en la " + 
  "rehabilitación post-fracturas.";

  constructor() { }

  ngOnInit() {
  }

}
