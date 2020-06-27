import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fonologia',
  templateUrl: './fonologia.component.html',
  styleUrls: ['./fonologia.component.css']
})
export class FonologiaComponent implements OnInit {
  
  titulo:String = "FONOAUDIOLOGÍA";

  logo:String = "../../assets/imagenes/logo.png";

  imagen:String = "../../assets/imagenes/fonoaudiologia.jpg";
  
  parrafo:String = "La fonoaudiología es una disciplina profesional que se encuentra relacionada con las ciencias de" + 
  " la salud, la psicología y la lingüística aplicada. Se encarga del estudio, la prevención, la evaluación, " + 
  "el diagnóstico y el tratamiento de los procesos normales y patológicos de la comunicación humana, abordándola" + 
  " desde cinco áreas fundamentales: el lenguaje oral y escrito, el habla, la voz, la audición y la función oral " + 
  "faríngea (deglución) en cualquier etapa del ciclo vital del ser humano, desde lactantes, hasta adultos mayores. ";
  
  parrafo1:String = "Depende del país donde se viva, esta ciencia se denomina de diferentes maneras: Fonoaudiología " + 
  "es el nombre que se le da, más que todo, en los países de América del Sur. Por otra parte, en Italia y España" + 
  " es conocida comúnmente como Logopedia, al igual que en Cuba y República Dominicana, en Francia se le denomina " + 
  "Ortofonía (orthophonie) y en los países de habla inglesa se la suele denominar Patología del lenguaje " + 
  "(Speech-Language Pathology) o Terapia del lenguaje (Speech therapy). ";
  
  parrafo2:String = "La base del desarrollo del lenguaje se construye en los primeros 6 años de vida, por lo " + 
  "tanto, la mayoría de trastornos del habla y del lenguaje, se comienzan a manifestar en este período. Debido " + 
  "a esto, los pacientes más frecuentes que asisten al consultorio de un fonoaudiólogo son niños, ya que es de " + 
  "suma importancia tratar y atacar estos problemas a tiempo, con el fin de lograr una solución efectiva, que no " + 
  "permita que dichas afecciones, influyan de manera negativa en los procesos comunicativos y el desarrollo " + 
  "psico-social de las personas que lo padecen. ";
  
  constructor() { }

  ngOnInit() {
  }

}
