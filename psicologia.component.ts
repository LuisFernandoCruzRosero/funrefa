import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-psicologia',
  templateUrl: './psicologia.component.html',
  styleUrls: ['./psicologia.component.css']
})
export class PsicologiaComponent implements OnInit {

  titulo:String = "PSICOLOGIA";

  logo:String = "../../assets/imagenes/logo.png";

  imagen:String = "../../assets/imagenes/psicologia.jpg";
  
  parrafo:String = "La psicología1​ (también sicología, de uso menos frecuente)2​ (literalmente «estudio o tratado del alma»; " + 
  "del griego clásico ψυχή, transliterado psykhé, «psique», «alma», «actividad mental», y λογία, logía, «tratado» o «estudio»)" + 
  " es, a la vez, una profesión, una disciplina académica3​ y una ciencia que trata el estudio y el análisis de la conducta" + 
  " y los procesos mentales de los individuos y de grupos humanos en distintas situaciones,1​3​4​5​6​ cuyo campo de estudio abarca" + 
  " todos los aspectos de la experiencia humana7​ y lo hace para fines tanto de investigación como docentes y laborales, entre otros.";

  parrafo2:String = "Hoy en día, la psicología no es una ciencia unitaria, pues existen diversas perspectivas psicológicas,8​" + 
  " que se corresponden con enfoques, corrientes o escuelas cada una de las cuales posee sus propios sistemas conceptuales y" + 
  " metodológicos. Entre ellas, puede haber coincidencias o, por el contrario, claras incompatibilidades;9​ esta variedad da" + 
  " pie a múltiples acepciones y abordajes.10​ Algunas corrientes se definen a sí mismas de modo excluyente, es decir, como" + 
  " la única vía para alcanzar un conocimiento sólido o científico y una intervención eficaz en psicología (por ejemplo, " + 
  "el conductismo watsoniano o el psicoanálisis freudiano), aunque con el tiempo, sus seguidores se han ido tornando cada " + 
  "vez más permeables a las influencias de otras escuelas.11​ Por su parte, enfoques como en el humanismo consideran que el " + 
  "método científico no es adecuado para investigar la conducta.";

  constructor() { }

  ngOnInit() {
  }

}
