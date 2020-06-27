import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-capacitacion',
  templateUrl: './capacitacion.component.html',
  styleUrls: ['./capacitacion.component.css']
})
export class CapacitacionComponent implements OnInit {

  titulo:String = "CAPACITACIÓN Y TALLERES";

  logo:String = "../../assets/imagenes/logo.png";

  imagen:String = "../../assets/imagenes/capacitacionTalleres.jpg";
  
  parrafo:String = "La capacitación es el conjunto de medios que se organizan de acuerdo a un plan, para lograr" + 
  " que un individuo adquiera destrezas, valores o conocimientos teóricos, que le permitan realizar ciertas tareas " + 
  "o desempeñarse en algún ámbito específico, con mayor eficacia. Se requiere la existencia de un potencial que se " + 
  "trata de transformar en acto. Puede tenerse o no conocimientos previos en el tema al que la capacitación se" + 
  " refiera. Por ejemplo, puede capacitarse a una persona sin conocimientos médicos para que aprenda primeros" + 
  " auxilios, o puede capacitarse a un médico cirujano, en una técnica quirúrgica en particular que hasta " + 
  "entonces no ha practicado, pero siendo innegable que el profesional cuenta con experiencia en prácticas similares.";
  
  constructor() { }

  ngOnInit() {
  }

}
