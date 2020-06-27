import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-semiinternado',
  templateUrl: './semiinternado.component.html',
  styleUrls: ['./semiinternado.component.css']
})
export class SemiinternadoComponent implements OnInit {

  titulo:String = "SEMIINTERNADO";
  
  logo:String = "../../assets/imagenes/logo.png";

  imagen:String = "../../assets/imagenes/semiinternado.jpg";

  parrafo:String = "Estimadas familias A partir del año 2019 la fundación establecio la modalidad en su " + 
  "servicio que sera INTERNADO. Esta modalidades esta establecida de la siguiente manera";

  parrafo1:String = "Servicios administrativos: desayuno, almuerzo, refrigerio, cena y lavandería Servicio " + 
  "existencial: pedagogía (clases de música, teatro, danzas, manualidad y actividades lúdicas y deportivas) " + 
  "psicología, fisioterapia, fonoaudiología, psiquiatría y enfermería.";

  constructor() { }

  ngOnInit() {
  }

}
