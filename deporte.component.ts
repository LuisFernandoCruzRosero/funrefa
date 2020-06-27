import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deporte',
  templateUrl: './deporte.component.html',
  styleUrls: ['./deporte.component.css']
})
export class DeporteComponent implements OnInit {

  titulo:String = "DEPORTE";

  logo:String = "../../assets/imagenes/logo.png";

  imagen:String = "../../assets/imagenes/deporte.jpg";

  parrafo1:String = "El deporte es una actividad reglamentada, normalmente de carácter competitivo y que puede mejorar" + 
  " la condición física2​ de quien lo practica, y además tiene propiedades que lo diferencian del juego.";

  parrafo2:String = "La Real Academia Española, en su Diccionario de la lengua española, define deporte como una " + 
  "«actividad física, ejercida como juego o competición, cuya práctica supone entrenamiento y sujeción a normas»; " + 
  "también, en una segunda acepción, más amplia, como «recreación, pasatiempo, placer, diversión o ejercicio físico," + 
  " por lo común al aire libre».3​ Por otra parte, la Carta Europea del deporte lo define como: «Todas las formas de " + 
  "actividades físicas que mediante una participación organizada o no, tienen como objetivo la expresión o la mejora" + 
  " de la condición física y psíquica, el desarrollo de las relaciones sociales o la obtención de resultados en competición" + 
  " de todos los niveles";

  constructor() { }

  ngOnInit() {
  }

}
