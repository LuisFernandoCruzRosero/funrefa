import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedagogia',
  templateUrl: './pedagogia.component.html',
  styleUrls: ['./pedagogia.component.css']
})
export class PedagogiaComponent implements OnInit {
  
  titulo:String = "PEDAGOGÍA";

  logo:String = "../../assets/imagenes/logo.png";

  imagen:String = "../../assets/imagenes/pedagogia2.jpg";
  
  parrafo:String = "La palabra pedagogía tiene su origen en el griego antiguo pedagogos. Este término estaba" + 
  " compuesto por Paidós (“niño”) y gogó (“conducir” o “llevar”). Por lo tanto, el concepto hacía referencia al " + 
  "esclavo que llevaba a los niños a la escuela.";
  
  parrafo1:String = "En la actualidad, la pedagogía es el conjunto de los saberes que están orientados hacia la" + 
  " educación, entendida como un fenómeno que pertenece intrínsecamente a la especie humana y que se desarrolla de manera social.";
  
  constructor() { }

  ngOnInit() {
  }

}
