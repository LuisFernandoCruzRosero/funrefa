import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  
  titulo:String = "ERROR 404";
  
  parrafo:String = "La pagina que intentaste solicitar no esta en el servidor.";
  
  constructor() { }

  ngOnInit() {
  }

}
