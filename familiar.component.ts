import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-familiar',
  templateUrl: './familiar.component.html',
  styleUrls: ['./familiar.component.css']
})
export class FamiliarComponent implements OnInit {
  
  titulo:String = "TERAPIAS PSICOLÓGICAS AL NÚCLEO FAMILIAR";

  logo:String = "../../assets/imagenes/logo.png";

  imagen:String = "../../assets/imagenes/familiar.jpg";
  
  parrafo:String = "En el seno de una familia pueden surgir numerosos problemas entre las parejas, los hijos," + 
  " los hijos con los padres o con otros miembros de la familia. La psicología familiar analiza y trata de resolver" + 
  " esos conflictos que se plantean en el grupo familiar. ";
  
  parrafo1:String = "En la psicología familiar se estudian las familias como sistemas y se analizan comportamientos," + 
  " patrones de comunicación y respuestas emocionales entre los miembros del grupo familiar. La psicología familiar," + 
  " puede prestar ayuda en casos de divorcio, problemas de pareja, muerte de un miembro de la familia y otros muchos" + 
  " supuestos ligados al ámbito familiar.";
  
  constructor() { }

  ngOnInit() {
  }

}
