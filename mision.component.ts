import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mision',
  templateUrl: './mision.component.html',
  styleUrls: ['./mision.component.css']
})
export class MisionComponent implements OnInit {

  titulo:String = "MISION";

  logo:String = "../../assets/imagenes/logo.png";

  imagen:String = "../../assets/imagenes/mision.jpg";
  
  parrafo:String = "Nuestra misión es promover el desarrollo y cuidados de los niños, niñas, jóvenes  y " + 
  "adultos en condicion de discapacidad, además de ofrecer servicios a esta población  trabajamos con  la " + 
  "comunidad en general ofreciendo  programas que busque  mejorar la calidad de vida de las familias.";

  constructor() { }

  ngOnInit() {
  }

}
